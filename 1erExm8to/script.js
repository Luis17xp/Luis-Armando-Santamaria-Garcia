// Script para redirigir a la página de Medidas desde Carátula
function generarCodigo() {
    var modelo = document.getElementById('modelo').value;
    var numReporte = document.getElementById('numReporte').value;
    var fechaInspeccion = document.getElementById('fechaInspeccion').value;
    var muestroPrendas = document.getElementById('muestroPrendas').value;
    var totalCajas = document.getElementById('totalCajas').value;
    var muestreoCajas = document.getElementById('muestreoCajas').value;

    window.location.href = 'medidas.html?modelo=' + modelo +
                           '&numReporte=' + numReporte +
                           '&fechaInspeccion=' + fechaInspeccion +
                           '&muestroPrendas=' + muestroPrendas +
                           '&totalCajas=' + totalCajas +
                           '&muestreoCajas=' + muestreoCajas;
}

// Script para generar la tabla dinámicamente en la página de Medidas
function generarTabla() {
    var parametros = getParametrosUrl();
    document.getElementById('modelo').textContent = parametros.modelo;
    document.getElementById('numReporte').textContent = parametros.numReporte;
    document.getElementById('fechaInspeccion').textContent = parametros.fechaInspeccion;
    document.getElementById('muestroPrendas').textContent = parametros.muestroPrendas;

    var tablaBody = document.getElementById('tablaBody');
    for (var i = 0; i < parametros.muestreoCajas; i++) {
        var fila = document.createElement('tr');
        var puntosMedir = document.createElement('td');
        var totalPrendas = document.createElement('td');
        fila.appendChild(puntosMedir);
        fila.appendChild(totalPrendas);
        var fichaTecnica = document.createElement('td');
        var noPrendaColores = document.createElement('td');
        fila.appendChild(fichaTecnica);
        fila.appendChild(noPrendaColores);
        tablaBody.appendChild(fila);
    }
}

function getParametrosUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    return {
        modelo: urlParams.get('modelo') || '',
        numReporte: urlParams.get('numReporte') || '',
        fechaInspeccion: urlParams.get('fechaInspeccion') || '',
        muestroPrendas: urlParams.get('muestroPrendas') || '',
        totalCajas: urlParams.get('totalCajas') || '',
        muestreoCajas: urlParams.get('muestreoCajas') || ''
    };
}

// Llamar a la función para generar la tabla al cargar la página
window.onload = generarTabla;















// Script para generar la tabla dinámicamente en la página de Medidas
function generarTabla() {
    var parametros = getParametrosUrl();
    document.getElementById('modelo').textContent = parametros.modelo;
    document.getElementById('numReporte').textContent = parametros.numReporte;
    document.getElementById('fechaInspeccion').textContent = parametros.fechaInspeccion;
    document.getElementById('muestroPrendas').textContent = parametros.muestroPrendas;

    // Obtener el número total de filas multiplicando totalCajas y muestreoCajas
    var totalFilas = parametros.totalCajas * parametros.muestreoCajas;

    var tablaBody = document.getElementById('tablaBody');
    for (var i = 0; i < totalFilas; i++) {
        var fila = document.createElement('tr');
        var puntosMedir = document.createElement('td');
        var totalPrendas = document.createElement('td');
        fila.appendChild(puntosMedir);
        fila.appendChild(totalPrendas);
        var fichaTecnica = document.createElement('td');
        var noPrendaColores = document.createElement('td');
        fila.appendChild(fichaTecnica);
        fila.appendChild(noPrendaColores);
        tablaBody.appendChild(fila);
    }
}

// Resto del código...
