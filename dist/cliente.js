"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre, impuesto) {
    _classCallCheck(this, Cliente);
    this._cliente = nombre;
    this._impuesto = impuesto;
  }
  _createClass(Cliente, [{
    key: "nombreCliente",
    get: function get() {
      return this._cliente;
    },
    set: function set(nuevo_nombre) {
      this._cliente = nuevo_nombre;
    }
  }, {
    key: "impuesto",
    get: function get() {
      return this._impuesto;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      var impuesto = (this.impuesto.brutoAnual - this.impuesto.deducciones) * 0.21;
      return impuesto;
    }
  }]);
  return Cliente;
}();
var _default = exports["default"] = Cliente;