const express = require('express')
const cantCpus = require('os').cpus().length
const cluster = require('cluster')

if(cluster.isPrimary) {
    console.log(`Master: ${process.pid}`)
    for(let i = 0; i < cantCpus; i++){
        cluster.fork()
    }

    cluster.on('exit', (worker) => {
        console.log(`cluster ${process.pid} salio`)
    })

}

else {
    const app = express()

const port = process.env.PORT || 8080

app.use(express.json())




app.get('/', (_, res) => {
    res.send(`Servidor express en ${port} - PID ${process.pid} - ${new Date().toLocaleString()}`)
})

app.listen(port, () => console.log(process.pid))
}