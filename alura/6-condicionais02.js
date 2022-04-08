console.log("lista de destinos viagens")
// shift=alt=f formatar codigo para deixar arrumado
var idade = 15
var estarAcompanhada = true
var temPassagemComprada = true
var listaDedestinos = new Array(
    `salvador`,
    `rio de janeiro`,
    `belo horizonte`,
)
//if (idade >= 18 && temPassagemComprada) os dois tem q ser verdardeiros {
//    console.log("Boa viagem")
//}
//else {
//console.log("voce nao pode embarcar")
//}
//console.log(listaDedestinos)

if (idade >= 18 || estarAcompanhada) {
    console.log("Boa viagem")
}
else {
console.log("voce nao pode embarcar")
}
console.log(listaDedestinos)