const socket = io();
const input = document.querySelector('#input')
const output = document.querySelector('#output')

socket.on('mensajes', (mensajes) => {
    output.innerHTML = mensajes
})


input.addEventListener('change', (event) => {
    socket.emit('mensaje', input.value)
})