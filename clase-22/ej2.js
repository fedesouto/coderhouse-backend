import print from './print.js'
import norm from 'normalizr'


const originalData = {
    id: "999",
    posts: [
        {
            id: "123", author: { id: "1", nombre: "Pablo", apellido: "Perez", DNI: "20442654", direccion: "CABA 123", telefono: "1567876547" }, title: "My awesome blog post", comments: [{ id: "324", commenter: { id: "2", nombre: "Nicole", apellido: "Gonzalez", DNI: "20442638", direccion: "CABA 456", telefono: "1567811543" } }, { id: "325", commenter: { id: "3", nombre: "Pedro", apellido: "Mei", DNI: "20446938", direccion: "CABA 789", telefono: "1567291542" } }]
        },
        {
            id: "1123", author: { id: "2", nombre: "Nicole", apellido: "Gonzalez", DNI: "20442638", direccion: "CABA 456", telefono: "1567811543" }, title: "My awesome blog post", comments: [{ id: "1324", commenter: { id: "1", nombre: "Pablo", apellido: "Perez", DNI: "20442654", direccion: "CABA 123", telefono: "1567876547" } }, { id: "1325", commenter: { id: "3", nombre: "Pedro", apellido: "Mei", DNI: "20446938", direccion: "CABA 789", telefono: "1567291542" } }]
        },
        {
            id: "2123", author: { id: "3", nombre: "Pedro", apellido: "Mei", DNI: "20446938", direccion: "CABA 789", telefono: "1567291542" }, title: "My awesome blog post", comments: [{ id: "2324", commenter: { id: "2", nombre: "Nicole", apellido: "Gonzalez", DNI: "20442638", direccion: "CABA 456", telefono: "1567811543" } }, { id: "2325", commenter: { id: "1", nombre: "Pablo", apellido: "Perez", DNI: "20442654", direccion: "CABA 123", telefono: "1567876547" } }]
        }
    ]
}

const commenterSchema = new norm.schema.Entity('commenters')
const commentSchema = new norm.schema.Entity('comments', { commenter: commenterSchema })
const authorSchema = new norm.schema.Entity('authors')
const postSchema = new norm.schema.Entity('posts', {
    author: authorSchema,
    commens: commentSchema
})

const articleSchema = new norm.schema.Entity('articles', {
    posts: [postSchema]
})

const normalized = norm.normalize(originalData, articleSchema)

print(normalized)