
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
- Variables globales del juego
- Funciones globales del juego
  - startGame()
  - gameLoop()
- Funciones específicas del autobús con los parkings y osbtáculos
  - parkingAppear()
  - busParkingCollision()
  - obstaclesAppear()
  - busObstaclesCollision()
- Funciones GameOver, NextLevel
  - gameOver()
  - saveBestScore()
  - displayBestScores()
  - nextLevel()
- Event Listeners

## bus.js

- Bus ()
    this.x;
    this.y;
    this.w;
    this.h;
    this.move;
- movement()

## obstacles.js 

- Obstacles ()
    this.x;
    this.y;
    this.w;
    this.h;

## parking.js
- Parking ()
    this.x;
    this.y;
    this.w;
    this.h;

# Extra Links 

### Sketch
[Link](https://excalidraw.com/#json=wjpEEXBpOk5B4Obeh94rj,VYbrDKTKEM1VUgtzE8F9-g)

### Slides
[Link](https://prezi.com/view/Uwl0XwBpDHEeq50q3JaA/)

## Deploy
[Link](https://inigoestebangomez.github.io/park-the-bus/)