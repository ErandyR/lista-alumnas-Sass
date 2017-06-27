var api = {
    url: 'https://laboratoria.cuadra.co/api/v1/students/'
};

var $contenedorLista = $("#contenedorLista");

var cargarPagina = function() {
    cargarNombre();
}

var plantillaLista = 
        '<li> __nombre__ <input type="checkbox"> </li>';


var plantillaFinal = '';

var cargarNombre = function() {
    $.getJSON(api.url, function (alumnas) {
        
        alumnas.forEach(crearNombreAlumna);
    });
};

var crearNombreAlumna = function (alumna) {
    var nombre = alumna.name;
    console.log(nombre);
    plantillaFinal = 
        plantillaLista.replace('__nombre__', nombre);
    $contenedorLista.append(
                plantillaFinal
            ); 
}

$(document).ready(cargarPagina);
