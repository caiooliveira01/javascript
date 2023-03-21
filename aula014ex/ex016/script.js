function contar() {
    let ini = document.getElementById('txti')
    let fim = document.querySelector('#txtf')
    let passo = document.getElementById('txtp')
    let res = document.querySelector('#res')
    // Colocar os inputs dentro de variáveis

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // Testar se os inputs tem algum número
        res.innerHTML = 'Impossível contar!'
        // alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value) // Transformar as caixas de texto em números
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) { //
            for(let c = i; c <= f; c += p) { // Enquanto o contador for menor que o fim, ele recebe o passo (Crescente)
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) { // Enquanto o contador for maior que o fim, ele perde o passo (Decrescente)
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}` // Concatena o resultado com o que havia antes
    }
}