var msg = document.getElementById('msg');
    var res = document.getElementById('main')
    var img = document.createElement('img')
    var data = new Date().getHours()

    img.setAttribute('id', 'foto')


    if(data >= 6 && data < 12) {
      img.setAttribute('src', 'imagens/manha.jpg')
    }else if(data >= 12 && data < 19){
      img.setAttribute('src', 'imagens/tarde.jpg')
    }else{
      img.setAttribute('src', 'imagens/noite.jpg')
    }
    msg.innerHTML = `Agora são ${data} horas`
    res.appendChild(img)