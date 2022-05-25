class ModelSenha {
    constructor() {
        this._senha = $('#inputPassword').val()
        this._confirmaSenha = $('#inputPasswordCheck').val()
    }

    senhasIguais() {
        return this._senha == this._confirmaSenha ? true : false
    }

    getSenha() {
        return this._senha
    }

    getConfirmaSenha() {
        return this._confirmaSenha
    }
}