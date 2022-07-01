import norm from "normalizr";
import blogPosts from './blog.js'
const esquemaAutor = new norm.schema.Entity('autor')

const esquemaComentario = new norm.schema.Entity('comentarios', {
    autor: esquemaAutor
})
const esquemaCategoria = new norm.schema.Entity('categoria')

const esquemaPost = new norm.schema.Entity('posts', {
    autor: esquemaAutor,
    categoria: esquemaCategoria,
    comentarios: [esquemaComentario]
})
const normalizado = norm.normalize(blogPosts, [esquemaPost])

const denorm = norm.denormalize(normalizado.result, esquemaPost, normalizado.entities)

console.log(normalizado)
