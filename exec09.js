function verificarMaiorIdade(nomePessoa, idadePessoa) {
    if (idadePessoa>=18){
        return nomePessoa + " é maior de idade."
    }else{
        return nomePessoa + " tem menos de 18 anos."
    }
}

function verificarIdade(nomePessoa, anoDeNascimento){
    let idade = 2018 - anoDeNascimento
    let mensagemRetorno = verificarMaiorIdade (nomePessoa,idade)
    console.log(mensagemRetorno);
}

let nome =" Joana"
let nascimento = 2002
verificarIdade(nome , nascimento)

verificarIdade("Cassiano",1988)

nome ="Vitor"
nascimento=1977
verificarIdade(nome, nascimento)
