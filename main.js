function tocaSom (idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Elemento não encontrado, ou não válido!');
    }
}

const ListaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

while (contador < ListaDeTeclas.length) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.remove('ativa');
        }
    }

    contador ++;
}
