class Respondent {
    constructor({ id, googleId, name }) {
        this.id = id
        this.googleId = googleId
        this.name = name
    }

    static fromGoogleAPI(googleAnswer) {
        const { profileObj } = googleAnswer
        const { googleId, name } = profileObj
        return new Respondent({
            googleId: parseInt((googleId)), name
        })
    }

    static fromAirtableAPI(answer) {
        console.log({
            googleId: answer.get('GoogleId'),
            name: answer.get('Alias'),
            id: answer.get('RecordId'),
        })
        return new Respondent({
            googleId: answer.get('GoogleId'),
            name: answer.get('Alias'),
            id: answer.get('RecordId'),
        })
    }
}

export default Respondent
