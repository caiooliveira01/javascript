let num = document.querySelector("#fnum")
let lista = document.querySelector("#flista")
let res = document.querySelector('#res')
let valores = [] // Array vazio para analisar os dados

function isNumero(n) { // Recebe o parâmetro n
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true  
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { // Verifica se possui algum valor na lista
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) { // ! = Não está na lista
        valores.push(Number(num.value))
        // Resultado da adição do número
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }

    // Limpar o número digitado e focar no input
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]

        // Analisar o maior e o menor
        for (let pos in valores) {

            if (valores[pos] > maior) {
                maior = valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }


        // Soma utilizando o reduce
        let soma = valores.reduce(function(soma, i) {
            return soma + i
        })

        let média = soma / total

        res.innerHTML = '' // Limpar o res
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>Maior valor informado: ${Math.max(...valores)}</p>`
        res.innerHTML += `<p>Menor valor informado: ${Math.min(...valores)}</p>`
        res.innerHTML += `<p>A soma de todos os valores é: ${soma}</p>`
        res.innerHTML += `<p>A média de todos os valores é: ${Math.round(média)}</p>`
    }
}

