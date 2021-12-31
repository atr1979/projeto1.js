function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('dia')
    var data = new Date()
    var hora = 17//data.getHours()
    var min = data.getMinutes()
    msg.innerHTML= `agora são ${hora} horas ${min} minutos.`
    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#87CEEB'
    } else if (hora >=12 &&  hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#ff4500'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#000000'
    }
}