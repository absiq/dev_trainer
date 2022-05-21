class ModelCep {
    constructor() {
    this._cep = ''
    this._estado = ''
    this._cidade = ''
    this._bairro = ''
    this._rua = ''
    this._complemento = ''
    }
    
    requisicaoApi() {
        const cepInput = $('#inputCep').val()
        if (this.validaCep() == true) {
            const request = new XMLHttpRequest()
            request.addEventListener( "load", () =>
            {
                if ( request.status == 200 )
                {
                    this._atualiza(resultado);
                }
            })
            request.open( "GET", `https://viacep.com.br/ws/${cepInput}/json/`, false );
            request.send();
            } else {
            // TODO: VIEW -> Mostrar na tela mensagem de CEP inválido
        }
        }

    validaCep() {
    // TODO: Função de validação do CEP -- Precisa ter 8 dígitos & estar entre 0 e 9
    const cepInput = $('#inputCep').val()
    const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if (cepInput.length == 8) {
        return true
    } else {
        return false
    }
    }

    _atualiza (resultado) {
        this._cep = resultado.cep
        this._estado = resultado.uf
        this._cidade = resultado.localidade
        this._bairro = resultado.bairro
        this._rua = resultado.logradouro
        this.complemento = resultado.complemento
    }

    getCep() {
        return this._cep
    }

    getEstado() {
        return this._estado
    }

    getCidade() {
        return this._cidade
    }

    getBairro() {
        return this._bairro
    }

    getRua() {
        return this._rua
    }

    getComplemento() {
        return this._complemento
    }
}