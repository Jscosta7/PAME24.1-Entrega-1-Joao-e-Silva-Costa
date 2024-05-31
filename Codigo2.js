class Funcionarios {
    constructor(ID_unico, usuario, CPF, email, senha) {
        this.ID_unico = ID_unico
        this.usuario = usuario
        this.CPF = CPF
        this.email = email
        this.senha = senha

    }
}

class Cliente extends Funcionarios {
    constructor(nome, data_de_nascimento){
        this.nome = nome
        this.data_de_nascimento = data_de_nascimento
    }
}

class Produtos {
    constructor(validade, preco, qtd_estoque, nome_produto, descricao) {
        this.validade = validade
        this.preco = preco
        this.qtd_estoque = qtd_estoque
        this.nome_produto = nome_produto
        this.descricao = descricao
    }
}

class Pedidos {
    constructor(ID_unico, ID_cliente, status, data_pedido) {
        this.ID_unico = ID_unico
        this.ID_cliente = ID_cliente
        this.status = status
        this.data_pedido = data_pedido
    }
}
class Sistema{

}

