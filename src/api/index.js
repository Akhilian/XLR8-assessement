import Capability from './Capabilities';

const Airtable = require('airtable');

class API {
    constructor() {
        this._client = new Airtable({apiKey: 'key697QLWLNFXvxgt'}).base('appnV2TyVFjWTLjzh');
    }

    async getCapabilities() {
        const records = await this._client('Capabilities').select({
            maxRecords: 24,
            view: "Grid view"
        }).firstPage()

        return records.map(Capability.fromAirtable)
    }
}

export default API