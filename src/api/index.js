import Capability from './Capabilities';
import Respondent from './Repondent';
import Response from './Response';

const Airtable = require('airtable');

class API {
    constructor() {
        this._client = new Airtable({ apiKey: 'key697QLWLNFXvxgt' }).base('appnV2TyVFjWTLjzh');
    }

    async getCapabilities() {
        const records = await this._client('Capabilities').select({
            maxRecords: 24,
            view: "Grid view"
        }).firstPage()

        return records.map(Capability.fromAirtable)
    }

    async addRespondent({ name = '', googleId }) {

        const repondents = await this._client('Respondent').select({
            maxRecords: 24,
            view: "Grid view",
            filterByFormula: `GoogleId = '${googleId}'`
        }).firstPage()

        if(repondents.length >= 1) {
            console.log(repondents)
            return Respondent.fromAirtableAPI(repondents[0])
        }

        const respondent = await this._client('Respondent').create([
            {
                "fields": {
                    "Alias": name,
                    "GoogleId": googleId
                }
            }
        ])

        return Respondent.fromAirtableAPI(respondent[0])
    }

    async saveOrUpdateResponse({ response, respondent, capability, note }) {
        let responseRecord;
        if (response) {
            responseRecord = await this._client('Response').update([
                {
                    "id": response.id,
                    "fields": {
                        "Note": parseInt(note),
                        "CapabilitiesEvaluation": [
                            capability.id
                        ],
                        "Respondent": [
                            respondent.id
                        ]
                    }
                }
            ])
        } else {
            responseRecord = await this._client('Response').create([
                {
                    "fields": {
                        "Note": parseInt(note),
                        "CapabilitiesEvaluation": [
                            capability.id
                        ],
                        "Respondent": [
                            respondent.id
                        ]
                    }
                }
            ])
        }

        return new Response({ id: responseRecord[0].id })
    }
}

export default API
