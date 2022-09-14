const randomize = () => Math.floor(Math.random() * 256)

class RandomColor {

    generar() {
        const color = `RGB(${randomize()}, ${randomize()}, ${randomize()})`
        return color;
    }
}


const colornuevo = new RandomColor().generar()

console.log(colornuevo)