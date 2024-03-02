"use strict";

var _impuesto = _interopRequireDefault(require("./impuesto.js"));
var _cliente = _interopRequireDefault(require("./cliente.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var nombre = "Romina";
var mba = 100000;
var deducciones = 5000;
//Prueba con -5000 :)

function validacionMontos(brutoAnual, deducciones) {
  if (typeof brutoAnual !== "number" || brutoAnual < 0) {
    console.log("El monto bruto anual debe ser un número positivo");
  } else if (typeof deducciones !== "number" || deducciones < 0) {
    console.log("deducciones debe ser un número positivo");
  } else if (deducciones > brutoAnual) {
    console.log("Queda exonerado de impuestos anuales");
  } else {
    var i1 = new _impuesto["default"](mba, deducciones);
    var c1 = new _cliente["default"](nombre, i1);
    console.log(c1);
    console.log(i1);
    console.log(i1.brutoAnual);
    console.log(c1.nombreCliente);
    console.log(c1.nombreCliente = "Pablo");
    console.log(c1.calcularImpuesto());
  }
}
validacionMontos(mba, deducciones);