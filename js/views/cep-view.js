class ViewCep {
    constructor() {}
    
    autocompleteFields(model) {
        $('#inputAddress').val(model.getRua())
        $('#inputAddress2').val(model.getComplemento())
        $('#inputCity').val(model.getCidade())
        $('#inputState').val(model.getEstado())
        $('#inputNeighborhood').val(model.getBairro())
    }
}