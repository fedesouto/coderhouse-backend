require('dotenv').config()
const twilio = require('twilio')

const cliente = twilio(process.env.TWILIO_USER, process.env.TWILIO_TOKEN)

cliente.messages.create({
    body: "Mensaje de texto de prueba desde twilio",
    from: "+18125059118",
    to: "+541140790676"
})
.then(data => console.log('mensaje enviado correctamente'))
.catch(err=>console.log(err))