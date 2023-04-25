let amigo = {nome: 'José',
sexo: 'M',
peso: 85.4, 
engordar(p=0){
    console.log(`Engordou ${p}KG`)
    this.peso += p
},
emagrecer(p=0){
    console.log(`Emagreceu ${p}KG`)
    this.peso -= p
}}

amigo.engordar(5)
amigo.emagrecer(20)

console.log(`${amigo.nome} pesa ${amigo.peso}KG`)