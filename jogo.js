var altura = 0
var largura = 0
var vidas = 1
var tempo = 10
var mosquitoIntervalo = 1500
var nivel = window.location.search

nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    mosquitoIntervalo = 1500
} else if(nivel === 'dificil'){
    mosquitoIntervalo = 1000
} else if(nivel === 'pesadelo'){
    mosquitoIntervalo = 750
}

function ajustaTamanhoPalco(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(altura, largura)
}

ajustaTamanhoPalco()

var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href="vitoria.html"
    } else
    document.getElementById('cronometro').innerHTML = tempo
}, 1000)

function posicaoRandomica(){

    // remover o mosquito anterior caso exista
    var mosquito = document.getElementById('mosquito')
    if(mosquito){
        mosquito.remove()

        if(vidas > 3){
            window.location.href='fim_de_jogo.html'
        } else{
            document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
            vidas ++
        }
    }

    var posicaox = Math.floor(Math.random() * largura) - 90
    var posicaoy = Math.floor(Math.random() * altura) - 90

    // se posicaox for menor que 0, recebe 0, senao recebe ela mesma
    posicaox = posicaox < 0 ? 0 : posicaox
    posicaoy = posicaoy < 0 ? 0 : posicaoy

    console.log(posicaox, posicaoy)

    // criar o elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaox + 'px'
    mosquito.style.top = posicaoy + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
    ladoAleatorio()
}

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random()*4)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
        case 3:
            return 'mosquito4'
    }
}

function ladoAleatorio(){
    var classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}