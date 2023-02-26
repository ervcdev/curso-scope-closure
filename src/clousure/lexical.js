//lexico significa que la accesibilidad de las varibles esta determinada por la posicion de las mismas en los ambitos anidados
const myGlobal = 0;

function myFunction() {
    const number = 1;
    console.log(myGlobal);

    function parent() { //function interna
        const inner = 2;
        console.log(number, myGlobal);

        function child() {
            console.log(inner, number, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();