class ControllerEmail {
    constructor() {}

    // processaEmail() para ser executado após clique do botão submit
    processaEmail() { 
        const modelEmail = new ModelEmail
        const email = $('#inputEmail4').val()
        if (modelEmail.validaEmail(email) == false) {
            // TODO: mostrar alerta de e-mail inválido
        }
    }
}