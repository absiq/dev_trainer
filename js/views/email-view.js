class ViewEmail {
    constructor() {}

    mostraErroEmail() {
        $('#popup-email').css('display', 'flex')
    }

    apagaErroEmail() {
        $('#popup-email').css('display', 'none')
    }
}