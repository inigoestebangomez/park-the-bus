class Obstacles {
    constructor () {
        this.node = document.createElement("img")
        this.node.src = "./images/cono.png"
        gameBoxNode.append(this.node)

        this.x = (Math.random() * (1180 - 500)) + 300// posicion x
        console.log(this.x)
        this.y = (Math.random() * (400-200)) + 200 // posicion y
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