class ViewCep {
    constructor() {}
    
    autocompleteFields(model) {
        $('#inputAddress').val(model.getRua())
    }
}