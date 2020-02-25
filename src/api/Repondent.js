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
            googleId, name
        })
    }
}

export default Respondent