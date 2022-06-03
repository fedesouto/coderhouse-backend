class Perimetro {
    static cuadrado(lado:number){
        return lado*4;
    }
    static circulo(diametro:number){
        return diametro*3.14;
    }
    static rectangulo(lado1: number, lado2:number){
        return (lado1*2 + lado2*2)
    }
}

export default Perimetro;