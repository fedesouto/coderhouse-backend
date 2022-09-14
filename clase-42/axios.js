const axios = require('axios')

const getData = async () => {
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data
}

getData().then(data => {
    console.log(data.data)
})

