
//  Primero capturamos todos los elementos a observar:
const imagenes = document.querySelectorAll('img');

//  Funcion que se ejecutara cada vez que el observador detecte que uno 
//  de los elementos ha entrado o salido de la pantalla
function alterarImagen(entradas) {

    //las entradas representan los elementos que fueron detectados
    //como es un Array debemos iterarlo
    entradas.forEach(entrada => {

        //  realizamos ternario para añadir o remover la clase "visible"
        entrada.isIntersecting //   devuelve "true" si entro en pantalla y "false" si no
            ? entrada.target.classList.add('visible')
            : entrada.target.classList.remove('visible')
    })
}


// Instanciamos un nuevo observador 
// (recibe como parametro una funcion y un objeto de opciones)
const observador = new IntersectionObserver( alterarImagen, {
    root: null,
    threshold: 0.4
    // Todas las opciones que necesitemos
})

//A cada elemento le decimos que va a ser observado:
imagenes.forEach(imagen => observador.observe(imagen))



