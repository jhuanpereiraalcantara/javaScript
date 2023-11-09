 function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
 }

 const listaDeTeclas = document.querySelectorAll('.tecla');
 
 let contador = 0;
 
 //para
for (let contador = 0 ; contador < listaDeTeclas.length;) {

const tecla = listaDeTeclas[contador];
const intrumento = tecla.classList[1];
//template string
const idAudio = '#som_${instrumento}';

console.log(idAudio);

tecla.onclick = function () {
   tocaSom(idAudio);
}

contador = contador + 1 ;

//console.log (contador);

}


    