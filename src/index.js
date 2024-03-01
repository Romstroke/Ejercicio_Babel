//Ejercicio Babel - Romina Valenzuela, Pablo Troncoso 

import Impuesto from './impuesto.js';
import Cliente from './cliente.js';

//Instanciar un Cliente
let nombre = "Romina";
let mba = 100000;
let deducciones = 5000;
//Prueba con -5000 :)

let i1 = new Impuesto(mba, deducciones);
let c1 = new Cliente(nombre, i1);

console.log(c1);
console.log(i1);
console.log(i1.brutoAnual);
console.log(c1.nombreCliente);
console.log(c1.nombreCliente = "Pablo");
console.log(c1.calcularImpuesto());