import Respondent from "../api/Repondent"

const KEY_RESPONDENT = 'respondent'

export default {
    saveSession: (respondent) => {
        window.sessionStorage.setItem(KEY_RESPONDENT, JSON.stringify(respondent))
    },

    isLoggedIn: () => {
        const respondent = window.sessionStorage.getItem(KEY_RESPONDENT)
        return !!respondent
    },

    getRespondent: () => {
        const respondent = window.sessionStorage.getItem(KEY_RESPONDENT)
        return new Respondent(JSON.parse(respondent))
    },

    clearSession: () => {
        window.sessionStorage.clear()
    }
}
