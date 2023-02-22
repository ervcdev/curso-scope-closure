//variables
var a; //declarar
var b = 'b'; //declaramos y lurgo asignamos
b = 'bb' //reasignamos
var a = 'aa'; //redeclaracion

//Global Scope
var fruit = 'Apple'; //global
console.log(fruit);
function bestFruit() {
    console.log(fruit);

}

bestFruit();


function countries() {
    country = 'Colombia'; // al crearla de este mode se crea de forma global

    console.log(country);
}

countries();
console.log(country);

