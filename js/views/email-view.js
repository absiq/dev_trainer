class ViewEmail {
    constructor() {}

    mostraErroEmail() {
        $('#respostaEmail').text('O e-mail inserido é inválido')
        $('#respostaEmail').css('color', '#c76464')
    }

    apagaErroEmail() {
        $('#respostaEmail').empty()
    }
}