"use strict";

var _impuesto = _interopRequireDefault(require("./impuesto.js"));
var _cliente = _interopRequireDefault(require("./cliente.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//Instanciar un Cliente
var nombre = "Romina";
var mba = 100000;
var deducciones = 5000;
//Prueba con -5000 :)

var i1 = new _impuesto["default"](mba, deducciones);
var c1 = new _cliente["default"](nombre, i1);
console.log(c1);
console.log(i1);
console.log(i1.brutoAnual);
console.log(c1.nombreCliente);
console.log(c1.nombreCliente = "Pablo");
console.log(c1.calcularImpuesto());