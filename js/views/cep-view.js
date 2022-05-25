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
        $('#respostaCep').text('O CEP inserido é inválido')
        $('#respostaCep').css('color', '#c76464')
    }

    apagaErroCep() {
        $('#respostaCep').empty()
    }
}