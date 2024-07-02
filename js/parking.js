class Parking {
    constructor(positionX) {
        this.node = document.createElement("img")
        this.node.src = "./images/parking_signal.png"
        gameBoxNode.append(this.node)
        this.x = positionX;
        this.y = 100;
        this.w = 50;
        this.h = 50;
        //configuración inicial del elem.
        this.node.style.position = "absolute"
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
    }
}