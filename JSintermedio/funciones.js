/* las varaibles que se ocupan dentro de js son 3 tipos
var -> de acuerdo js06 esta siendo sustituida pero es de uso mas comun 
para detrminar una variable de acceso publico

let -> es una varaible protegida ya solo funciona dentro de una funcion o declaracion de codigo

const -> la cual es un valor constante en todo el documento

var x ="y";
let x = "x";
if(true){
    let x ="x";
    console.log(x);
}
console.log(x);*/

/* funcoines flecha es una funcion de js que a diferencia de una funcion normal no genera su propio contexto (this)
necesita ser declarada antes de ser usada y no necesita un returns*/
/*
function sumaFuncionNormal(n1, n2){
    return n1+n2;
}
console.log(`vamos a sumar 3 y 5 : ${sumaFuncionNormal(3,5)}`);
 /* una funcion flecha tiene la sig estrcutura: 
 "cadena -> id, clase, name, atributo */ 

/* const sumaFuncionflecha = (n1, n2) => n1+n2;
 console.log(`vamos a sumar 7 y 5 : ${sumaFuncionNormal(7,5)}`);*/

const razasdeperro = [
    "pitbull",
    "rotgualer",
    "dalmata",
    "gran danese"
];
/*
for(let indice=0;indice<razasdeperro.length;indice++){
    console.log(razasdeperro[indice]);
}

for of 
for(const raza of razasdeperro){
    console.log(raza);
};
*/
//for in 

/*for(const indice in razasdeperro){
    //console.log(razasdeperro);
    console.log(razasdeperro[indice]);
};*/

//for each es iterar sobre los elemetos sobre el eleemnto del arreglo que no devuelve nada y en realidad es una funcion flecha*/

/*razadeperro.foreach((raza, indice, arregloOriginal)=> console.log(raza));

razadeperro.foreach((raza)=> console.log(raza));*/

/*funcion MAP soirve para iterar sobre los elemetos de un arreglo y regresar un arreglo diferente con el cual se pueden hacer operaciones*/

/*const razasdeperroEnMayusculas = razasdeperro.map((raza)=>console.log(raza.toUpperCase()));*/

//find nos permite buscar un elemento dentro del arreglo y si lo encuentro lo regreso y si no lo lanza u "undefinend"

if(razadeperro.find((raza) => raza === "pitbull")){
    console.log("la raza se encuentra en el arreglo");
    console.log(razadeperro);
}else{
    razadeperro.push("pug");
    console.log(razadeperro);
}
//FINDINDEX

const indiceChihuahua = razasdePerro.findIndex((raza)=> raza === "Chihuahua");

if(indiceChihuahua > -1){
    console.log(razasdePerro[indiceChihuahua]);
    //aparte voy agregar que diga que la raza es pequeña
    razasdePerro[indiceChihuahua] += "(Raza de pequeña de perro)";
    console.log(razasdePerro[indiceChihuahua]);
    //diferencia sin el indice
    console.log(razasdePerro);
}else{
    console.log("No esta esa raza");
}










