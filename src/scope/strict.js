// forma estricta de declara las variables, 
//var pi; //undefined => se coloca var cuando solo asignamos un valor sin declararla
'use strict';
pi = 3.1416;
console.log(pi);

function myFUnction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFUnction());

