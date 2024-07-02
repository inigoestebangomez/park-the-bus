class Obstacles {
    constructor (positionX, positionY) {
        this.node = document.createElement("img")
        this.node.src = "./images/cono.png"
        gameBoxNode.append(this.node)

        this.x = positionX // posicion x
        this.y = positionY // posicion y
        this.w = 30 // ancho
        this.h = this.w // alto
        //configuración inicial del elem.
        this.node.style.position = "absolute"
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
    }


}