class CuentaBancaria {
    titular;
    #saldo;

    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(nuevoSaldo) {
        if (nuevoSaldo < 0) {
            console.error("El saldo no puede ser negativo.");
        } else {
            this.#saldo = nuevoSaldo;
        }
    }

}

const cuenta = new CuentaBancaria("Cristian", 100);