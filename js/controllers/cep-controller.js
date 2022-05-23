class ControllerCep {
    constructor () {}

    adicionaCep() {
        const modelData = new ModelCep()
        modelData.requisicaoApi()

        const cepView = new ViewCep()
        cepView.autocompleteFields(modelData)
    }

    imprimeErroCep() {
        const cepView = new ViewCep()
        cepView.mostraErroCep()
    }

    apagaErroCep() {
        const cepView = new ViewCep()
        cepView.apagaErroCep()
    }
}

$('#inputCep').blur(()=> {
const controllercep = new ControllerCep()
controllercep.adicionaCep()
})