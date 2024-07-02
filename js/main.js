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
let parkingArray = [];
let obstaclesArray = []
let mainIntervalId = null



//* FUNCIONES GLOBALES DEL JUEGO
//funciones de movimiento
// funciones de colisión

// Inicio de juego sobre botón de inicio de juego
function startGame() {
console.log("iniciando juego")
    // 1)ocultar la pantalla de inicio
gameStartNode.style.display = "none"
    // 2)mostrar la pantalla de juego
gameScreenNode.style.display = "flex"
    // 3)Añadir los elementos iniciales de juego
busObj = new Bus()
obstaclesAppear()
parkingAppear()
//console.log(busObj)
    // 4)iniciar intervalo inic. del juego (gameLoop)
setInterval(() => {
    gameLoop()
}, Math.round(1000/60))
    // 5) intervalos que determinan la frecuencia en la que aparecen los elementos del juego.
    // todo. preguntar si tengo alguno

}
// función de movimiento loop que se ejecuta a 60 fps
// movimientos automáticos, checkeos de colisiones, animaciones
function gameLoop() {
    //console.log("juego andando a 60fps") 
    busWallCollision()
    
    busParkingCollision()
    parkingDisappear()
    
    busObstaclesCollision()
    obstaclesDisappear()
}

function busWallCollision(){

}

function busObstaclesCollision(){
    
}
// PARKING. aparecer, colisión y desaparecer
function parkingAppear(){
let posiblesXPark1 = [450, 580, 710, 840]

let randomXPark1 = Math.floor(Math.random() * posiblesXPark1.length)

let positionXPark1 = posiblesXPark1[randomXPark1]

}
let parkingObj1 = new Parking(positionXPark1)
obstaclesArray.push(parkingObj1)
    
let parkingObj2 = new Parking(positionXPark2)
obstaclesArray.push(parkingObj2)

function busParkingCollision(){

}

function parkingDisappear(){
//remueve el parking si existe y ha colisionado
let parkingCheck = parkingArray[0]
if (parkingCheck && busObstaclesCollision === "true") {
    //remover objeto
    parkingArray.shift()
    //remover el nodo del DOM
    parkingCheck.node.remove()
}
}
//OBSTÁCULOS. aparecer, colisión, desaparecer

function obstaclesAppear(){
    let randomPositionXObj1 = Math.floor((Math.random() * (1180 - 500)) + 300)
    let randomPositionYObj1 = Math.floor((Math.random() * (400-200)) + 200)
    let randomPositionXObj2 = Math.floor((Math.random() * (1180 - 500)) + 300)
    let randomPositionYObj2 = Math.floor( (Math.random() * (400-200)) + 200)

    let obstaclesObj1 = new Obstacles(randomPositionXObj1, randomPositionYObj1)
    obstaclesArray.push(obstaclesObj1)
    
    let obstaclesObj2 = new Obstacles(randomPositionXObj2, randomPositionYObj2)
    obstaclesArray.push(obstaclesObj2)
    
    console.log(obstaclesArray)
    }
    
function busObstaclesCollision() {
    obstaclesArray.forEach((eachObstacle) => {
        //eachObstacle sería uno
        //obstaclesObj es el otro
        //necesitamos verificar si están colisionando
        if (
            busObj.x < eachObstacle.x + eachObstacle.w &&
            busObj.x + busObj.w > eachObstacle.x &&
            busObj.y < eachObstacle.y + eachObstacle.h &&
            busObj.y + busObj.h > eachObstacle.y
        ) {
            // Si Collision detectada
            restartGame()
        }
    })
}

function obstaclesDisappear() {
    // let firstT = tuberiaArr[0];
    // if (firstT && firstT.x <= 0 - firstT.w) {
    //   tuberiaArr.shift();
    //   firstT.node.remove();
    // }  
}

function restartGame() {
    // 1 - limpiar todos los intervalos
clearInterval(mainIntervalId)
    // 2 - ocultar pantalla de juego
gameScreenNode.style.display = "none"
// 3 - mostrar la pantalla final
gameRestartNode.style.display = "flex"
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