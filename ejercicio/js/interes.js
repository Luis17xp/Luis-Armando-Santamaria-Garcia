<<<<<<< HEAD


function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;

    if(teclado == 8) return true;

    var patron = /[0-9\d .]/;

    var codigo = String.fromCharCode(teclado);

    return patron.test(codigo);
}

function interes(){
    var valor = document.formulario.cantidad.value;
    console.log(valor);
    var resul = parseInt(valor);
    var interes = resul * 0.02;
    var total = interes + resul;

    document.formulario.sueldoI.value = "$"+total;
}

function borrardatos(){
    document.formulario.cantidad.value = "";
    document.formulario.sueldoI.value = "";
=======
function validar_numeros(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true:
    var patron = /[0-9\d .]/;
    var codigo = String.fromCharCode(teclado);
    return patron.test(codigo);
}
function interes(){
    var valor = document.formulario.cantidad.value;
    console.log(valor)
    var resul = parseInt(valor);
    var interes=resul *0.02;
    var total = interes + resul;

    docuemnt.formulario.sueldoI.value ="$"+total;
}

function borrar_datos(){
    document.formulario.cantidad.value= "";
    document.formulario.sueldoI.value= "";


>>>>>>> 08cfb6688697bdee70ea92d7b7f01f1c3045de85
}