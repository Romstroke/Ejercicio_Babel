class Cliente {
    constructor(nombre, impuesto) {
        this._cliente = nombre;
        this._impuesto = impuesto;
    }

    get nombreCliente() {
        return this._cliente;
    }

    get impuesto() {
        return this._impuesto;
    }

    set nombreCliente(nuevo_nombre) {
        this._cliente = nuevo_nombre;
    }

    calcularImpuesto() {
        const impuesto = (this.impuesto._montoBrutoAnual - this.impuesto._deducciones) * 0.21;
        if (this.impuesto._montoBrutoAnual < 0) {
            console.log("Estimado favor de entregar un monto positivo");
        } else if (typeof this.impuesto._montoBrutoAnual !== "number") {
            console.log("Estimado favor de entregar un monto válido");
        }

        if (this.impuesto._deducciones < 0) {
            console.log("Estimado favor de entregar un número positivo para deducciones");
        } else if (typeof this.impuesto._deducciones !== "number") {
            console.log("Estimado favor de entregar un número válido para deducciones");
        }

        if (this.impuesto._deducciones > this.impuesto._montoBrutoAnual) {
            console.log("Queda exonerado de Impuestos Anuales");
        }
        return impuesto;

    }
}
export default Cliente;