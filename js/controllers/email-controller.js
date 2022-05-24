class ControllerEmail {
    constructor() {}

    // processaEmail() para ser executado após clique do botão submit
    processaEmail() { 
        const model = new ModelEmail()
        const view = new ViewEmail()
        if (model.validaEmail(model.getEmail()) == false) {
            view.mostraErroEmail()
        } else {
            view.apagaErroEmail()
        }
    }
}


$('#inputEmail').blur(()=> {
    const controlleremail = new ControllerEmail()
    controlleremail.processaEmail()
    })