let objCarro={
    modelo:'147',
    numeroVidros:4,
    marca:'Fiat',
    numPortas:2
}

let objCasa =new Object();
objCasa.numeroComodos = 5;
objCasa.valorImovel = 535254,00;
objCasa['aluguel']=false;
objCasa['venda']= true;

objCarro.numPortas= 4
let umIdentificadorDaCasa='valorImovel'

console.log(objCarro);
console.log(objCarro.modelo);
console.log(objCasa['numeroComodos']);
console.log(objCasa[umIdentificadorDaCasa]);
