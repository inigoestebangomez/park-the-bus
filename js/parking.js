class Parking {
    constructor() {
        this.node = document.createElement("img")
        this.node.src = "./images/parking_signal.png"
        gameBoxNode.append(this.node)
        this.x = 440;
        this.y = 100;
        this.w = 60;
        this.h = 60;
        //configuración inicial del elem.
        this.node.style.position = "absolute"
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
    }
}