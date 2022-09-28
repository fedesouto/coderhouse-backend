require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_URI_SESSIONS = process.env.MONGODB_URI_SESSIONS
const SESSION_SECRET = process.env.SESSION_SECRET
const PORT = process.env.PORT
const PERSISTENCE = process.env.PERSISTENCE

module.exports = {
    MONGODB_URI,
    MONGODB_URI_SESSIONS,
    SESSION_SECRET,
    PORT,
    PERSISTENCE
}