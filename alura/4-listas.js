console.log("lista de destinos viagens")

var listaDedestinos = new Array(
    `salvador`,
    `rio de janeiro`,
    `belo horizonte`,
)
listaDedestinos.push(`curitiba`)
listaDedestinos.splice(2, 1)

console.log(listaDedestinos)