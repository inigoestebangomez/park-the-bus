
# PARK THE BUS!

## [Play the Game!](https://inigoestebangomez.github.io/park-the-bus/)

![Game Logo](./images/Designer%20(1).jpeg)


# Description

**Park the Bus!** es un minijuego que se desarrolla desde la simpleza de la propia idea: aparcar un autobús.

La metodología de juego también es sencilla, se debe conducir hasta la zona de aparcamiento propuesta aleatoriamente, y aparcar.
Dispondremos de un temporizador de 30 segundos para hacer tantos estacionamientos como seamos capaces. 
Por cada estacionamiento correcto, sube un punto al score total.

Sin embargo, existen de forma aleatoria 2 conos que dificultarán el paso hasta las zonas indicadas de parking. Si los golpeamos, acaba la partida.

Finalmente, dispondremos de un score total, para conocer nuestras mejores marcas.

![Park the bus!!](./images/Designer%20(1).jpeg "Main")
![Park the bus!!](./images/Designer%20(2).jpeg "Main")
# Main Functionalities

- Se puede conducir por toda la pantalla del mini-juego.

- Disponemos de dos señales de Parking aleatorias

- Los conos son obstáculos que nos impiden circular de forma sencilla

# Score System

- El score se hace de manera automática. Cada vez que estacionamos en el sitio adecuado, se suma un punto en nuestro score.

- Finalmente, podremos ver nuestros mejores scores.

# Backlog Functionalities

- Añadir nuevos parkings más grandes en función del score

- Añadir vehículos en movimiento como sistemas nuevos de colisión.

- Cambiar el sistema de colisión por uno que sea "de área".

- Desarrollar un movimiento más complejo del autobús.

# Technologies used

- HTML
- CSS 
- Javascript 
- DOM Manipulation 
- Local Storage
- Audio implementation
- "Keyup" Event Listener

# States

- La primera pantalla es  **Pantalla de Inicio**. Muestra principalmente la portada del minijuego, las instrucciones, y el botón de inicio de la partida.
- La segunda pantalla es **Pantalla de Juego**. Es la pantalla donde se juega al minijuego. Tenemos un score que aumenta, un timer de 30 segundos, y el screen propio del juego.
- La tercera pantalla es **Pantalla Final**. Aquí se muestran los resultados del score actual, el top 3 mejores scores del juego, y un botón de reinicio.

# Proyect Structure

- En cuanto a la estructura JS: *main.js, bus.js, obstacles.js y parking.js*
- main.js sirve para manipular los *DOM elements*, el resto de archivos son las *Game class* que conforman el juego. El resto son *styles.css* que incluye los estilos, así como el *index.html*, la estructura del juego.

## main.js

- Elementos principales del juego
- - Pantallas
- - Botones
- - Game Box
- - Música
- - Score, Best scores, Timer
- Variables globales del juego
- Funciones globales del juego
- Funciones específicas del autobús con los parkings y osbtáculos
- Funciones GameOver, NextLevel
- Event Listeners

## bus.js

- class Bus {
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
    this.move = 9;
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
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
        break;
      case "Down":
        this.y += move;
        this.node.src = "./images/autobus-down.png"
        this.node.style.width = `${this.h}px`;
        this.node.style.height = `${this.w}px`;
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
        break;
    }
    this.x = Math.max(0, Math.min(this.x, gameBoxNode.offsetWidth - this.w));
    this.y = Math.max(0, Math.min(this.y, gameBoxNode.offsetHeight - this.h));
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  }
}

## obstacles.js 

- class Obstacles {
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
## parking.js
- class Parking {
    constructor(positionX, positionY) {
        this.node = document.createElement("img")
        this.node.src = "./images/parking_signal.png"
        gameBoxNode.append(this.node)
        this.x = positionX;## main.js

- Elementos principales del juego
- - Pantallas
- - Botones
- - Game Box
- - Música
- - Score, Best scores, Timer
- Variables globales del juego
- Funciones globales del juego
- Funciones específicas del autobús con los parkings y osbtáculos
- Funciones GameOver, NextLevel
- Event Listeners

## bus.js

- class Bus {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./images/autobus.png";
    gameBoxNode.append(this.node);
    this.x = 50; // posicion x
    this.y = 300; // posicion y
    this.w = 200; // ancho
    this.h = 80; // alto
    this.node.style.position = "relative";
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.left = `${this.x}px`;
    this.move = 9;
  }
- movement(direction) {
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
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
        break;
      case "Down":
        this.y += move;
        this.node.src = "./images/autobus-down.png"
        this.node.style.width = `${this.h}px`;
        this.node.style.height = `${this.w}px`;
        this.node.style.top = `${this.y}px`;
        this.node.style.left = `${this.x}px`;
        break;
    }
    this.x = Math.max(0, Math.min(this.x, gameBoxNode.offsetWidth - this.w));
    this.y = Math.max(0, Math.min(this.y, gameBoxNode.offsetHeight - this.h));
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
  }
}

## obstacles.js 

- class Obstacles {
    constructor (positionX, positionY) {
        this.node = document.createElement("img")
        this.node.src = "./images/cono.png"
        gameBoxNode.append(this.node)

        this.x = positionX // posicion x
        this.y = positionY // posicion y
        this.w = 30 // ancho
        this.h = this.w // alto
        this.node.style.position = "absolute"
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
    }
}
## parking.js
- class Parking {
    constructor(positionX, positionY) {
        this.node = document.createElement("img")
        this.node.src = "./images/parking_signal.png"
        gameBoxNode.append(this.node)
  
        this.x = positionX;
        this.y = positionY;
        this.w = 50;
        this.h = 50;
        this.node.style.position = "absolute"
        this.node.style.width = `${this.w}px`
        this.node.style.height = `${this.h}px`
        this.node.style.top = `${this.y}px`
        this.node.style.left = `${this.x}px`
    }
}

# Extra Links 

### Sketch
[Link](https://excalidraw.com/#json=wjpEEXBpOk5B4Obeh94rj,VYbrDKTKEM1VUgtzE8F9-g)

### Slides
[Link](https://prezi.com/view/Uwl0XwBpDHEeq50q3JaA/)

## Deploy
[Link](https://inigoestebangomez.github.io/park-the-bus/)