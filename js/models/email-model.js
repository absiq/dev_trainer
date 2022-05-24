class ModelEmail {
    constructor() {
        this._email = $('#inputEmail').val()
    }

    validaEmail(email) {
        return email.indexOf('@') !== -1 && email.indexOf('.') !== -1 ? true : false
    }

    getEmail() {
        return this._email
    }
}