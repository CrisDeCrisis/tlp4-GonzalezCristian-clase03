# TLP4 - Clase 03: Prototipos y Clases en JavaScript

Este proyecto explora conceptos fundamentales de JavaScript: funciones constructoras, prototype, clases, getters/setters y manipulación de prototipos nativos.

## 1. Diferencias entre funciones constructoras con prototype y class

**Funciones constructoras con prototype:**

- Sintaxis tradicional de JavaScript para crear objetos y compartir métodos.
- Los métodos se agregan al prototype manualmente.
- Ejemplo en `punto-01.js`:
  ```js
  function CuentaBancaria(titular, saldoInicial = 0) {
    this.titular = titular;
    this.saldo = saldoInicial >= 0 ? saldoInicial : 0;
  }
  CuentaBancaria.prototype.depositar = function (monto) {
    /* ... */
  };
  ```

**Clases (class):**

- Sintaxis moderna (ES6), más clara y similar a otros lenguajes orientados a objetos.
- Métodos y propiedades se definen dentro de la clase.
- Permite campos privados (`#campo`).
- Ejemplo en `punto-02.js`:
  ```js
  class CuentaBancaria {
    #saldo;
    constructor(titular, saldoInicial = 0) {
      this.titular = titular;
      this.#saldo = saldoInicial >= 0 ? saldoInicial : 0;
    }
    depositar(monto) {
      /* ... */
    }
  }
  ```

**Ventajas y desventajas:**

- Funciones constructoras: mayor compatibilidad, pero menos intuitivo y sin privacidad real.
- Clases: sintaxis más limpia, soporte de privacidad, pero no tienen hoisting y requieren navegadores modernos.

## 2. Ventajas de usar getters y setters

- Permiten controlar el acceso y la modificación de propiedades internas.
- Facilitan la validación de datos antes de asignar valores.
- Mejoran la encapsulación y la seguridad de los datos.
- Permiten exponer propiedades calculadas como si fueran atributos simples.
- Ejemplo en `punto-02.js`:
  ```js
  get saldo() { return `Saldo actual: $${this.#saldo}`; }
  set saldo(nuevoSaldo) { if (nuevoSaldo >= 0) this.#saldo = nuevoSaldo; }
  ```

## 3. Problemas al modificar prototipos nativos como String

- Puede generar conflictos con librerías o futuras versiones del lenguaje.
- Afecta a todas las instancias del tipo nativo, lo que puede provocar errores difíciles de detectar.
- Sobrescribir métodos nativos puede romper funcionalidades estándar (ver `punto-04.js`).
- Ejemplo:
  ```js
  String.prototype.toUpperCase = function () {
    return "ESTO ESTÁ PROHIBIDO!";
  };
  ```

## 4. Diferencias entre asignar un método directamente al prototype o usar Object.assign

Supongamos un objeto `personPrototype` con un método `greet`:

```js
const personPrototype = {
  greet() {
    return `Hola, soy ${this.nombre}`;
  },
};
```

**Asignación directa:**

```js
MiConstructor.prototype.greet = personPrototype.greet;
```

- Solo agrega ese método específico.
- Más control y explícito.

**Object.assign:**

```js
Object.assign(MiConstructor.prototype, personPrototype);
```

- Copia todas las propiedades enumerables de `personPrototype` al prototype.
- Útil para agregar varios métodos de una vez.
- Puede sobrescribir métodos existentes si hay nombres en común.

**Resumen:**

- Asignación directa: para métodos puntuales.
- Object.assign: para copiar varios métodos/properties de un objeto prototipo.
