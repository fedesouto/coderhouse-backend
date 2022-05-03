/* 
EJERCICIO 1

const numeros = {}

for (let i = 0; i < 10000; i++) {
    const newNumber = Math.floor(Math.random() * 21);
    if (numeros[newNumber]) numeros[newNumber]++;
    else numeros[newNumber] = 1;
}

console.log(numeros) */

//EJERCICIO 2

const productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 }
]


const nombres = productos.map(producto => producto.nombre).join(',')

const precioTotal = productos.reduce((a, b) => a + b.precio, 0).toFixed(2)

const precioPromedio = precioTotal / productos.length

const menorPrecio = productos.reduce((inicial, producto) => {
    if (!inicial) return producto;
    else if (inicial.precio < producto.precio) {
        return inicial;
    }
    return producto;

})
const mayorPrecio = productos.reduce((inicial, producto) => {
    if (!inicial) return producto;
    else if (inicial.precio > producto.precio) {
        return inicial;
    }
    return producto;

})

console.log(nombres)
console.log(precioTotal)
console.log(precioPromedio)
console.log(menorPrecio)
console.log(mayorPrecio)


