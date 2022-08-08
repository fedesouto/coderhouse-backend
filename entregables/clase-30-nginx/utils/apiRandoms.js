const randomNums = (cantidad) => {
    const nums = []
    for(let i = 0; i < cantidad; i++) {
        const num = Math.floor(Math.random() * 1000) + 1
        nums.push(num)
    }
    return nums;
};

const calcularRepeticiones = (cantidad) => {
    const arr = randomNums(cantidad)
    const resultado = {}
    for(let i of arr) {
        resultado[i]? resultado[i]++: resultado[i] = 1
    }
    return resultado;
};

process.on('message', (message) => {
    const result = calcularRepeticiones(message)
    process.send(result)
})