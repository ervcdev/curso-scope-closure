// fucnion dentre de otra funcion es una funcion anidada
function greeting() {
    let userName = 'Ervin';

    function displayUserName() {
        return `Hello ${userName}`
    }
    return displayUserName;
}

//accede al contexto
const g = greeting();
console.log('la g sin parentesis');
console.log(g); //retorno de la defincion de la funcion
console.log('la g con parentesis');
console.log(g()); //



