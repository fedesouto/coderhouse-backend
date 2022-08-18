const {createTransport} = require('nodemailer')

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'blaze.emard@ethereal.email',
        pass: 'jJ59XmSVGYycXbbUGU'
    }
});
const asunto = process.argv[2]
const mensaje = process.argv[3]

transporter.sendMail({
    from: 'Fede <fede@coder.com>',
    to: 'blaze.emard@ethereal.email',
    subject: asunto,
    html: `<h2>${mensaje}</h2>`
}).then(() => console.log('enviado')).catch((err) => console.log(err))


