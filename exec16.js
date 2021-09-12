let carro={
    extras:['ar-condicionado','freios abs','som'],
    velocidade : 0,
    faroisLigados: false,
    ligarFarois:function(){
        this.faroisLigados=true;
    },
    acelerar:function(velocidade){
        this.velocidade+=velocidade;
    },
    freiar:function(){
        this.velocidade=0
    }
}
carro.ligarFarois()
console.log('Farois ligados:'+ carro.faroisLigados)
carro.acelerar(70)
console.log('Velocidade:' + carro.velocidade);
carro.freiar()
console.log("Velocidade:" + carro.velocidade);
console.log(carro.extras[2]);