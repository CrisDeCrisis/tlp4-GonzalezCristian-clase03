
function CuentaBancaria(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial >= 0 ? saldoInicial : 0;
}

CuentaBancaria.prototype.depositar = function (monto) {

    if (monto < 0) {
        console.error('El monto a depositar no puede ser negativo.');
        return false;
    }

    this.saldoInicial += monto;
    return true;
}

CuentaBancaria.prototype.extraer = function (monto) {

    if (monto < 0) {
        console.error('El monto a extraer no puede ser negativo.');
        return false;
    }

    if (monto > this.saldoInicial) {
        console.error('Fondos insuficientes.');
        return false;
    }

    this.saldoInicial -= monto;
    return true;
}

CuentaBancaria.prototype.consultarSaldo = function () {
    return `Saldo actual: $${this.saldoInicial}`;
}

const cuentaBancaria = new CuentaBancaria('Cristian', 2500)

cuentaBancaria.consultarSaldo()