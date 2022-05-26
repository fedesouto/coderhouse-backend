const socket = io();

socket.on('messages', (messages) => {
    messages.length&&messages.map(({usuario, mensaje}) => {
        const html = document.createElement('p')
        html.innerHTML = `<b class="user">${usuario}:</b> ${mensaje}`
        document.querySelector('#root').appendChild(html)
    })})

socket.on('new_message', ({usuario, mensaje}) => {
    const html = document.createElement('div')
        html.innerHTML = `<b class="user">${usuario}:</b> ${mensaje}`
        document.querySelector('#root').appendChild(html)
})

document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault()
    const usuario = document.querySelector('#usuario').value;
    const mensaje = document.querySelector('#mensaje').value;
    const nuevoMensaje = {usuario, mensaje}
    socket.emit('new_message', nuevoMensaje)

})