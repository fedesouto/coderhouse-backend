const recordatorios = []

let counter = 1

const getRecordatorios = () => {
    return recordatorios
}

const createRecordatorio = (args) => {
    const { input } = args
    const { title, description } = input
    const newRecordatorio = {
        title: title,
        description: description,
        id: counter,
        timestamp: Date.now()
    }
    recordatorios.push(newRecordatorio)
    counter++
    return newRecordatorio
}

module.exports = { getRecordatorios, createRecordatorio }