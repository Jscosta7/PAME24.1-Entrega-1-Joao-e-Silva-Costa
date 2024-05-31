// Classe auxiliar
class usuarios {
    constructor(ID_unico, CPF, email, senha){
        this.ID_unico = ID_unico
        this.CPF = CPF
        this.email = email
        this.senha = senha
    }
}
class Funcionarios extends usuarios{
    constructor(usuario){
        this.usuario = usuario
    }
}

class Cliente extends usuarios {
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


function menu_nao_logado (){
    console.log("1. Fazer login")
    console.log("2. Fazer cadastro")
    console.log("3. Sair do Sistema")
    var = input require('readlyne-sync')
    var = resposta input.question("Digite a opção:\n")
    while(true){
        if(resposta="1"){

        }
        else if(resposta="2"){

        }
        else if(resposta="3"){

        }
        else{
            var = resposta input.question("Essa opção não existe. Digite outra opção:\n")
        }
    }

}

function Login (){
    Id
}