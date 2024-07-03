class Bus {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/autobus.png";
    gameBoxNode.append(this.node);
    this.x = 50; // posicion x
    this.y = 300; // posicion y
    this.w = 200; // ancho
    this.h = 80; // alto
    //configuración inicial del elem.
    this.node.style.position = "relative";
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    // valor del movimiento
    this.move = 10;
  }
  movement(direction) {
    const move = this.move;
    switch (direction) {
      case "Right":
        this.x += move;
        this.node.src = "./images/autobus.png"
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
        break;
      case "Left":
        this.x -= move;
        this.node.src = "./images/autobus-left.png"
        this.node.style.width = `${this.w}px`;
        this.node.style.height = `${this.h}px`;
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
        break;
      case "Up":
        this.y -= move;
        this.node.src = "./images/autobus-up.png"
        this.node.style.width = `${this.h}px`;
        this.node.style.height = `${this.w}px`;
        break;
      case "Down":
        this.y += move;
        this.node.src = "./images/autobus-down.png"
        this.node.style.width = `${this.h}px`;
        this.node.style.height = `${this.w}px`;
        break;
    }
    // para delimitar el área de uso del bus en X e Y
    this.x = Math.max(0, Math.min(this.x, gameBoxNode.offsetWidth - this.w));
    this.y = Math.max(0, Math.min(this.y, gameBoxNode.offsetHeight - this.h));

    // Actualiza la posición del nodo en el DOM
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  }


}
