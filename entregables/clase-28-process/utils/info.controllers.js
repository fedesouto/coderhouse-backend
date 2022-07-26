const getServerInfo = (req, res, next) => {
    const data = {
        argumentosDeEntrada: process.argv,
        os: process.platform ,
        nodeVersion: process.version,
        rss: process.memoryUsage.rss(),
        execPath: process.execPath,
        processId: process.pid,
        carpeta: process.cwd()
    }
    res.json(data)
}

module.exports = getServerInfo