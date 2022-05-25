class ViewSenha {
    constructor() {}

    mostraErroSenha() {
        $('#respostaPasswordCheck').text('A senha inserida não confere')
        $('#respostaPasswordCheck').css('color', '#c76464')
    }

    apagaErroSenha() {
        $('respostaPasswordCheck').empty()
    }
}