require('dotenv').config()

const {createTransport} = require('nodemailer')

const transporter = createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'federicogsouto@gmail.com',
        pass: process.env.APP_PASSWORD
    }
});
const asunto = process.argv[2]
const mensaje = process.argv[3]

transporter.sendMail({
    from: 'Fede <fede@coder.com>',
    to: 'federicogsouto@gmail.com',
    subject: asunto,
    html: `<h2>${mensaje}</h2>`
}).then((status) => console.log(status)).catch((err) => console.log(err))
