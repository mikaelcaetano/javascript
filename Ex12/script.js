function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agr são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        img.src='ex/manha.jpeg'
        document.body.style.background='yellow'
    }
    else if(hora >= 12 && hora < 18) {
        img.src='ex/tarde.jpeg'
        document.body.style.background='red'
    }
    else {
        img.src='ex/noite.jpeg'
        document.body.style.background='grey'
    }
}