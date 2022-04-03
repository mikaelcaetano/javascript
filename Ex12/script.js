function carregar(){
    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')
    var data = new Date()
    var hora = 20 //data.getHours()
    msg.innerHTML=`agr são ${hora} horas`
    if(hora >= 0 && hora <12){
        img.src='manha.jpeg'
        document.body.style.background='yellow'
    }
    else if(hora>=12&&hora<=18){
        img.src='tarde.jpeg'
        document.body.style.background='red'
    }
    else{
        img.src='noite.jpeg'
        document.body.style.background='grey'
    }
}