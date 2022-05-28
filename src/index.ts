/*Ejercicio: Múltiplos

• Cree un método esMultiplo con 2 parámetros que devuelva el
valor lógico verdadero o falso según si el primer número que
se indique como parámetro es múltiplo del segundo
• Recuerde que un numero es múltiplo de otro si al dividirlo su
resto es cero
• Recuerde que la operación mod permite saber si el resto de
una división es cero
*/
let dividendo: number = Number(prompt("Ingrese un número a dividir"));
let divisor: number = Number(prompt("Ingrese un número por el cual dividir"));

let calcularMultiplo = (divi: number, divis: number): number => {
  if (divi % divis == 0) {
    console.log("" + divisor + " es multiplo de " + dividendo);
  } else {
    console.log("" + divisor + " no es multiplo de " + dividendo);
  }
};
console.log(calcularMultiplo(dividendo, divisor));
