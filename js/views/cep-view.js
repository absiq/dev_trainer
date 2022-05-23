class ViewCep {
    constructor() {}
    
    autocompleteFields(model) {
        $('#inputAddress').val(model.getRua())
        $('#inputAddress2').val(model.getComplemento())
        $('#inputCity').val(model.getCidade())
        $('#inputState').val(model.getEstado())
        $('#inputNeighborhood').val(model.getBairro())
    }

    mostraErroCep() {
        $('#popup-error').css('display', 'flex')
    }

    apagaErroCep() {
        $('#popup-error').css('display', 'none')
    }

    mostraConfirmacaoCadastro() {
        $('#popup-ok').css('display', 'flex')
    }

    apagaConfirmacaoCadastro() {
        $('#popup-ok').css('display', 'none')
    }
}