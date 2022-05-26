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

// Botão de voltar na página de cadastro

document.getElementById("orange-btn").onclick = function (e) {
    e.preventDefault()
    window.location = "../index.html";
};