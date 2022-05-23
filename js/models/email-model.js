class ModelEmail {
    constructor() {
        this._email = ''
    }

    validaEmail(email) {
        email.indexOf('@') !== -1 && email.indexOf('.') !== -1 ? true : false
    }

    getEmail() {
        return this._email
    }
}