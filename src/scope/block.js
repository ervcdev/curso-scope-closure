function fruits() {
  if (true) { //cdespues de los corchetes se hace la creacion del bloque
    var fruit1 = "Apple"; //Function scope
    let fruit2 = "Kiwi"; //block scope
    const fruit3 = "Pera"; // block scope

    console.log(fruit2);
    console.log(fruit3);
  }
    console.log(fruit1);

  
}

fruits();
