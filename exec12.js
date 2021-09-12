var arrPrato=new Array('Arroz','Tomate','Alface')
arrPrato.push('Feijão')
console.log(arrPrato);
if (arrPrato.indexOf('Arroz')!==-1){
    arrPrato.shift()
}
console.log(arrPrato);