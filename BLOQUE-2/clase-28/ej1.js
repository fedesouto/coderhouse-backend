const params = process.argv.slice(2).map(param => Number(param))

if(params.length) {
    for(let param of params) {
        if(isNaN(param)){
            console.log({
                error: {
                    description: 'los argumentos no son validos',
                    numeros: params
                }
            })
            process.exit(-5)
        }
    }
    const datos = {
        numeros: params,
        promedio: params.reduce((total, num) => (total + num)) /params.length ,
        max: Math.max(...params),
        min: Math.min(...params),
        ejecutable: process.execPath,
        pid: process.pid
    }
    console.log(datos)
}

else {
    console.error({
        error: {
            description: 'no se recibieron parametros'
        }
    })
    process.exit(-4)
}