function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
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
    };

    contador ++;
}
