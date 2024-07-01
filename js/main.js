//* ELEMENTOS PRINCIPALES DEL DOM

// PANTALLAS
const gameStartNode = document.querySelector("#game-start") // pantalla de inicio
const gameScreenNode = document.querySelector("#game-screen") //  pantalla juego
const gameRestartNode = document.querySelector("#game-restart") // pantalla reinicio

// BOTONES
const startBtnNode = document.querySelector("#start-game-btn") // botón de inicio
const restartBtnNode = document.querySelector("#restart-game-btn") // botón restart

//GAME-BOX (donde vamos añadiendo todos los elementos del juego)
const gameBoxNode = document.querySelector("#game-box")

//* VARIABLES GLOBALES DEL JUEGO
// Bus
// Obstáculos
// variables de intervalos

let busObj = null
let obstaclesObj = null
let parkingObj = null



//* FUNCIONES GLOBALES DEL JUEGO
//funciones de movimiento
// funciones de colisión

// primera función de inicio de juego sobre botón de inicio de juego
function startGame() {
console.log("iniciando juego")
// 1)ocultar la pantalla de inicio
gameStartNode.style.display = "none"
// 2)mostrar la pantalla de juego
gameScreenNode.style.display = "flex"
// 3)Añadir los elementos iniciales de juego
busObj = new Bus()
obstaclesObj = new Obstacles()
parkingObj = new Parking()

//console.log(busObj)

// 4)iniciar intervalo inicial del juego (gameLoop)
setInterval(() => {
    gameLoop()
}, Math.round(1000/60))
// 5) intervalos que determinan la frecuencia en la que aparecen los elementos del juego.

//cuando el bus choque contra un elemento de parking, se cambian los conos de posicion

}
// función de movimiento loop que se ejecuta a 60 fps
// movimientos automáticos, checkeos de colisiones, animaciones
function gameLoop() {
    //console.log("juego andando a 60fps") 
    busWallCollision()
}

function busWallCollision(){
    // if ()
}

function busObstaclesCollision(){

}

function busParkingCollision(){

}



//* EVENT LISTENERS
// addEventListener de botón de inicio de juego
startBtnNode.addEventListener("click", () => {
    startGame()
})

window.addEventListener("keydown", (event) => {
    // console.log(event.key);
    if (event.key === "ArrowRight") {
        busObj.movement("Right")
    } else if (event.key === "ArrowLeft") {
        busObj.movement("Left")
    } else if (event.key === "ArrowUp"){
        busObj.movement("Up")
    } else if (event.key === "ArrowDown"){
        busObj.movement("Down")
    // } else if (event.key === "ArrowRight" && event.key === "ArrowUp"){
    //     busObj.movement("RightUp")
    // } else if (event.key === "ArrowRight" && event.key === "ArrowDown"){
    //     busObj.movement("RightDown") 
    // }  else if (event.key === "ArrowLeft" && event.key === "ArrowUp"){
    //     busObj.movement("LeftUp")
    // }  else if (event.key === "ArrowLeft" && event.key === "ArrowDown"){
    //     busObj.movement("LeftDown")
    }
  }); 