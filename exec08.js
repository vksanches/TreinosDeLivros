function verificarIdade(nomePessoa, anoDeNascimeto){
    let idade= 2018 - anoDeNascimeto
    
    if(idade>=18){
        return nomePessoa + " é maior de idade."
}else{
    return nomePessoa + " é menor de idade"
}
}
let nome ="Joana"
let anoDeNascimento ="2002"
console.log( verificarIdade(nome, anoDeNascimento))

console.log(verificarIdade("Cassiano", 1988));

nome="Vitor"
anoDeNascimento=1977
let texto = verificarIdade(nome,anoDeNascimento)
console.log(texto);