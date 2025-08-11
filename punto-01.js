
function CuentaBancaria(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial >= 0 ? saldoInicial : 0;
}

CuentaBancaria.prototype.depositar = function (monto) {

    if (monto < 0) {
        console.error('Transacción fallida');
        return 'El monto a depositar no puede ser negativo.';
    }

    this.saldo += monto;
    console.info('Transacción realizada');
    return `Saldo actual: $${this.saldo}`;
}

CuentaBancaria.prototype.extraer = function (monto) {

    if (monto < 0) {
        console.error('Transacción fallida');
        return 'El monto a extraer no puede ser negativo.';
    }

    if (monto > this.saldo) {
        console.error('Transacción fallida');
        return 'Fondos insuficientes.';
    }

    this.saldo -= monto;
    console.info('Transacción realizada');
    return `Saldo actual: $${this.saldo}`;
}

CuentaBancaria.prototype.consultarSaldo = function () {
    return `Saldo actual: $${this.saldo}`;
}

const cuentaBancaria = new CuentaBancaria('Cristian', 2500)

console.log(cuentaBancaria.consultarSaldo());

console.log(cuentaBancaria.depositar(1000));

console.log(cuentaBancaria.extraer(300));