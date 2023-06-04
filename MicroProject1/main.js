function tocaSom(elementoAudio){
    const elemento = document.querySelector(elementoAudio);

    if(elemento === null){
        console.log('Elemento não encontrado.');
    }else if(elemento.localName == 'audio'){
        elemento.play();
    }else
        console.log('Not a sound.');
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador<listaDeTeclas.length; contador++){

    const teclas = listaDeTeclas[contador];
    const instrumento = teclas.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    teclas.onclick = function () {
        tocaSom(idAudio);
    }
    /*console.log(contador);
    console.log(idAudio);*/
    teclas.onkeydown = function (evento) {
        if(evento.code == 'Space' || evento.code == 'Enter'){
            teclas.classList.add('ativa');
        }
    }

    teclas.onkeyup = function () {
        teclas.classList.remove('ativa');
    }
} 
