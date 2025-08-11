class CuentaBancaria {
    titular;
    #saldo;

    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }

    get saldo() {
        return `Saldo actual: $${this.#saldo}`;
    }

    set saldo(nuevoSaldo) {

        if (nuevoSaldo < 0) {
            console.error("El saldo no puede ser negativo.");
        }

        this.#saldo = nuevoSaldo;
    }

    SetDepositar(cantidad) {

        if (cantidad < 0) {
            console.error('Transacción fallida!');
            return 'El monto a depositar no puede ser negativo.';
        }

        this.#saldo += cantidad;
        console.info('Transacción realizada!')
        return `Saldo actual: $${this.#saldo}`;
    }

    SetExtraer(cantidad) {

        if (cantidad < 0) {
            console.error('Transacción fallida!');
            return 'El monto a extraer no puede ser negativo.';
        }

        if (cantidad > this.#saldo) {
            console.error('Transacción fallida!');
            return 'Fondos insuficientes para realizar la extracción.';
        }

        this.#saldo -= cantidad;
        console.info('Transacción realizada!');
        return `Saldo actual: $${this.#saldo}`;
    }

}

const cuenta = new CuentaBancaria("Cristian", 100);