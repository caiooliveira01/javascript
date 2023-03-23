let num = [5, 8, 2, 9, 3]
num[3] = 6 // Valor do elemento 3
num.push(7) // Acresenta ao final do array
num.sort() // Organiza em ordem crescente

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4) // Busca de valores dentro do array
if (pos == -1) {
    console.log("O valor não foi encontrado")
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}