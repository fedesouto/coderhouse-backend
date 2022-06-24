const admin = require("firebase-admin");

const serviceAccount = require("./coder-backend-5ae09-firebase-adminsdk-6rlzw-d042075360.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const CRUD = async () => {
    const db = admin.firestore()
    const query = db.collection('colores')
    try {
        /* await query.doc().create({nombre: 'green'})
        console.log('document added') */

        /* const snapshot = await query.get()
        const docs = snapshot.docs
        const response = docs.map(doc => {
            console.log(doc.data())
        }) */

        /* const doc = query.doc('gjwJGlv7Xhv4raQFoLP3')
        await doc.update({nombre: 'navy'})
        console.log('blue updated') */

        const doc = query.doc('SrOLsBUUefGsjy2LE6RK')
        await doc.delete()
        console.log('green deleted')
    } catch (error) {
        console.error(error)
    }
}

CRUD()