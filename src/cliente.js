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
        const impuesto = (this.impuesto.brutoAnual - this.impuesto.deducciones) * 0.21;
        return impuesto;
    }
}
export default Cliente;

