class Impuesto {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    get brutoAnual() {
        return this._montoBrutoAnual;
    }

    get deducciones() {
        return this._deducciones;
    }

    set brutoAnual(nuevo_monto) {
        this._montoBrutoAnual = nuevo_monto;
    }
    set deducciones(nuevas_deducciones) {
        this._deducciones = nuevas_deducciones;
    }
}

export default Impuesto;

