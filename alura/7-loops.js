console.log("lista de destinos viagens")
// shift=alt=f formatar codigo para deixar arrumado
var idade = 15
var estarAcompanhada = true
var destino = "Rio de Janeiro"
var listaDedestinos = new Array(
    `salvador`,
    `rio de janeiro`,
    `belo horizonte`,
)

let contador = 0
while(contador<3){
    if(listaDedestinos[contador] == destino){
        console.log("destino eciste")
    }
    else{
        console.log("nao tem")
    }
    contador +=1
}



console.log(listaDedestinos)