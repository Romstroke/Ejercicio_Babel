
import Impuesto from './impuesto.js';
import Cliente from './cliente.js';

let nombre = "Romina";
let mba = 100000;
let deducciones = 5000;
//Prueba con -5000 :)

function validacionMontos(brutoAnual, deducciones) {
    if (typeof brutoAnual !== "number" || brutoAnual < 0) {
        console.log("El monto bruto anual debe ser un número positivo");
    } else if (typeof deducciones !== "number" || deducciones < 0) {
        console.log("deducciones debe ser un número positivo");
    } else if (deducciones > brutoAnual) {
        console.log("Queda exonerado de impuestos anuales")
    } else {
        let i1 = new Impuesto(mba, deducciones);
        let c1 = new Cliente(nombre, i1);
        console.log(c1);
        console.log(i1);
        console.log(i1.brutoAnual);
        console.log(c1.nombreCliente);
        console.log(c1.nombreCliente = "Pablo");
        console.log(c1.calcularImpuesto());
    }
}
validacionMontos(mba, deducciones);
