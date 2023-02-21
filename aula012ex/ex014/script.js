function carregar() {
    var msg = document.getElementById('msg')
    var img = document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        // Bom dia
        img.src = 'foto-manha.png'
        document.body.style.background = '#E2CD9F'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.src = 'foto-tarde.png'
        document.body.style.background = '#462738'
    } else {
        // Boa noite
        img.src = 'foto-noite.png'
        document.body.style.background = '#21293E'
    }
}