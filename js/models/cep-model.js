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
        let cepInput = $('#inputCep').val()
        if (this.validaCep() == true) {
            $.ajax({
                url: `viacep.com.br/ws/${cepInput}/json/`,
                success: (resultado) => {
                // TODO: Criar resposta de sucesso
                this._atualiza(resultado)
                },
                error: (erro) => {
                // TODO: Criar resposta de erro com TRY/CATCH
                }
            })
        } else {
            // TODO: VIEW -> Mostrar na tela mensagem de CEP inválido
        }
        }

    validaCep() {
    // TODO: Função de validação do CEP -- Precisa ter 8 dígitos E estar entre 0 e 9
    let cepInput = $('#inputCep').val()
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