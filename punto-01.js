
function CuentaBancaria(titular, saldoInicial) {
    this.titular = titular;
    this.saldoInicial = saldoInicial;
}

CuentaBancaria.prototype.depositar = function (monto) {
    console.log('Ingresando deposito..');
}

CuentaBancaria.prototype.extraer = function (monto) {
    console.log('Extrayendo..');
}

CuentaBancaria.prototype.consultarSaldo = function () {
    console.log('Saldo actual: $...');
}

const cuentaBancaria = new CuentaBancaria('Cristian', 2500)

cuentaBancaria.consultarSaldo()