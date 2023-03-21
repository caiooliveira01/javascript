function tabuada() {
    let num = document.querySelector("#txtnum")
    let tab = document.querySelector("#seltab")
    // Input dentro da variável

    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        var c = 1
        tab.innerHTML = '' // Limpar
        while (c <= 10) {
            let item = document.createElement('option') // Criar uma opção dentro do Select
            item.text = `${n} x ${c} = ${n * c}` // Texto dentro do Select
            item.value = `tab${c}`
            tab.appendChild(item) // Resultados
            c++
        }

    }
}