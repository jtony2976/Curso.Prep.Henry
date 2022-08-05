// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  
  return Object.entries(objeto);
  
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objeto = {};
  for(var i=0; i<string.length; i++){
        objeto[string[i]] = ( objeto[string[i]] || 0 ) + 1;
    }
    return objeto;


    /*
    objeto[string[i]] = ( objeto[string[i]] || 0 ) + 1;
    fijate que si el elemento objeto[strign[i] no existe, entonces tomará el valor 0 y luego le sumará 1

    como estás trabajando con un objeto, se puede acceder a él con el nombre de su indice y a eso hace referencia el string[i], 
    si no existe, devolvería undefined... y con || le digo que si es undefined que tome el valor 0 y luego le sume 1. Entonces 
    luego de encontrar la primera de cada letra tendrá que resolver objeto[string[i]]= undefined || 0 + 1

    */
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var minusculas = "";
  var mayusculas = ""; 
  
  for (var i = 0; i < s.length; i++) {
    if(s[i] === s[i].toLowerCase()){
      minusculas = minusculas + s[i];
    }else{
      mayusculas = mayusculas + s[i];
    }
  }  

  return mayusculas + minusculas;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let palabras = str.split(' ');
  let cantPalabras = palabras.length;
  let newString = '';
  let lengthPalabra = 0;

  for (let index = 0; index < cantPalabras; index++) {
    lengthPalabra = palabras[index].length;
    for (let index2 = 0; index2 < lengthPalabra; index2++) {
        if (lengthPalabra === 1) {
            newString = newString + palabras[index].charAt(0);
        } else {
            newString = newString + palabras[index].charAt((lengthPalabra - 1) - index2);
        }
    }
    if (index < cantPalabras - 1) {
      newString = newString + " ";
    }
  }
  
  return newString;

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroString = numero.toString();
  let cantnumeros = numeroString.length;
  let newString = '';

  for (let index = 0; index < cantnumeros; index++) {
    newString = newString + numeroString.charAt((cantnumeros - 1) - index);
  }

  if (numeroString === newString) {
      return "Es capicua";
  } else {
      return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  //Escribe tu código aquí
  let cantLetras = cadena.length;
  let newString = "";

  for (let index = 0; index < cantLetras; index++) {
    if (cadena.charAt(index) === "a" || cadena.charAt(index) === "b" || cadena.charAt(index) === "c") {
        continue;
    } else {
        newString = newString + cadena.charAt(index);
    }
  }

  return newString;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function (itemActual, itemSiguiente) {return itemActual.length - itemSiguiente.length})

  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

  /*
    la flecha (=>) significa condicion. Va a filtrar cada elemento del arreglo 1 que cumpla con la condicion.
    condicion: si el elemento del arreglo1 se encuentra (.includes) dentro del arreglo2, lo saca para el 
               crear el nuevo arreglo en la variable 'interssecionNew'
  */
  var intersecciónNew = arreglo1.filter(elementoEnArreglo1 => arreglo2.includes(elementoEnArreglo1));

  return intersecciónNew;

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

