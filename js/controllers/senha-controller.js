class ControllerSenha {
    constructor() {}

    // processaSenha() para ser executado após clique do botão submit
    processaSenha() { 
        const model = new ModelSenha()
        const view = new ViewSenha()
        if (model.senhasIguais(model.getSenha()) == false) {
            view.mostraErroSenha()
        } else {
            view.apagaErroSenha()
        }
    }
}


$('#inputPasswordCheck').blur(()=> {
    const controlleremail = new ControllerSenha()
    controlleremail.processaSenha()
    })