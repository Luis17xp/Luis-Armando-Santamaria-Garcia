<<<<<<< HEAD
function validar(formulario){
    if(formulario.nombre.value.length < 3){
        alert("Escribe por lo menos más de 3 caracteres en el campo Nombre");
        formulario.nombre.focus();
    }
    var checkOK="qwertyuiopasdfghjklzxcvbnmñ"+"QWERTYUIOPASDFGHJKLZXCVBNMÑ";
    var checkString=formulario.nombre.value;

    alert(checkString);

    var todoesvalido = true;

    for(var i=0;i< checkString.length;i++){
        var ch=checkString.charAt(i);
        for(var j=0; j< checkOK.length; j++){
            if(ch==checkOK.charAt(j)){
                break;
            }
        }
        if(j==checkOK.length){
            todoesvalido=false;
            break;
        }
        if(!todoesvalido){
            alert("Favor de escribir unicamente letras en el campo nombre")
            formulario.nombre.focus();
            return false;
        }
    }
}
/* buscar expresiones regularespor parte de moxila*/

function validar(formulario){
    if(formulario.edad.value.length < 3){
        alert("Escribe por lo menos más de 3 caracteres en el campo edad");
        formulario.nombre.focus();
    }
    var checkOK="1234567890";
    var checkString=formulario.edad.value;

    alert(checkString);

    var todoesvalido = true;

    for(var i=0;i< checkString.length;i++){
        var ch=checkString.charAt(i);
        for(var j=0; j< checkOK.length; j++){
            if(ch==checkOK.charAt(j)){
                break;
            }
        }
        if(j==checkOK.length){
            todoesvalido=false;
            break;
        }
        if(!todoesvalido){
            alert("Favor de escribir unicamente letras en el campo edad")
            formulario.edad.focus();
            return false;
        }

        var txt =formulario.email.value;
        var expreg=/\+@\;
        var expreg2=/\+@\;
        var expreg2=/\+@\;
        aletr("el correo "+(expreg.test(txt)?" ": "no" ) + "es valido ");
        return expreg.test;

    }

=======
function validar(formulario){
    if(formulario.nombre.value.length < 3){
        alert("Escribe por lo menos más de 3 caracteres en el campo Nombre");
        formulario.nombre.focus();
    }
    var checkOK="qwertyuiopasdfghjklzxcvbnmñ"+"QWERTYUIOPASDFGHJKLZXCVBNMÑ";
    var checkString=formulario.nombre.value;

    alert(checkString);

    var todoesvalido = true;

    for(var i=0;i< checkString.length;i++){
        var ch=checkString.charAt(i);
        for(var j=0; j< checkOK.length; j++){
            if(ch==checkOK.charAt(j)){
                break;
            }
        }
        if(j==checkOK.length){
            todoesvalido=false;
            break;
        }
        if(!todoesvalido){
            alert("Favor de escribir unicamente letras en el campo nombre")
            formulario.nombre.focus();
            return false;
        }
    }
}
/* buscar expresiones regularespor parte de moxila*/

function validar(formulario){
    if(formulario.edad.value.length < 3){
        alert("Escribe por lo menos más de 3 caracteres en el campo edad");
        formulario.nombre.focus();
    }
    var checkOK="1234567890";
    var checkString=formulario.edad.value;

    alert(checkString);

    var todoesvalido = true;

    for(var i=0;i< checkString.length;i++){
        var ch=checkString.charAt(i);
        for(var j=0; j< checkOK.length; j++){
            if(ch==checkOK.charAt(j)){
                break;
            }
        }
        if(j==checkOK.length){
            todoesvalido=false;
            break;
        }
        if(!todoesvalido){
            alert("Favor de escribir unicamente letras en el campo edad")
            formulario.edad.focus();
            return false;
        }

        var txt =formulario.email.value;
        var expreg=/\+@\;
        var expreg2=/\+@\;
        var expreg2=/\+@\;
        aletr("el correo "+(expreg.test(txt)?" ": "no" ) + "es valido ");
        return expreg.test;

    }

>>>>>>> 08cfb6688697bdee70ea92d7b7f01f1c3045de85
 }