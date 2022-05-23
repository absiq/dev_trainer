class ControllerCep {
    constructor () {}

    adicionaCep() {
        const modelData = new ModelCep
        modelData.requisicaoApi()

        const cepView = new ViewCep
        cepView.autocompleteFields(modelData)
    }
}