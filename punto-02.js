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
        }

        this.#saldo = nuevoSaldo;
    }

    depositar(cantidad) {

        if (cantidad < 0) {
            console.error("El monto a depositar no puede ser negativo.");
            return false;
        }

        this.#saldo += cantidad;
        return true;
    }

    extraer(cantidad) {

        if (cantidad < 0) {
            console.error("El monto a extraer no puede ser negativo.");
            return false;
        }

        if (cantidad > this.#saldo) {
            console.error("Fondos insuficientes para realizar la extracción.");
            return false;
        }

        this.#saldo -= cantidad;
        return true;
    }

}

const cuenta = new CuentaBancaria("Cristian", 100);