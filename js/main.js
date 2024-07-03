//* ELEMENTOS PRINCIPALES DEL DOM

// PANTALLAS
const gameStartNode = document.querySelector("#game-start"); // pantalla de inicio
const gameScreenNode = document.querySelector("#game-screen"); //  pantalla juego
const gameRestartNode = document.querySelector("#game-restart"); // pantalla reinicio

// BOTONES
const startBtnNode = document.querySelector("#start-game-btn"); // botón de inicio
const restartBtnNode = document.querySelector("#restart-game-btn"); // botón restart

// GAME-BOX (donde vamos añadiendo todos los elementos del juego)
const gameBoxNode = document.querySelector("#game-box");

// MÚSICA
const backgroundMusicNode = document.querySelector("#background-music");
const gameOverMusicNode = document.querySelector("gameover-music")

//ELEMENTOS DEL GAME-SCREEN
//score
const scoreNode = document.querySelector("#score");
const finalScoreNode = document.querySelector("#final-score");
//timer
const timerNode = document.querySelector("#timer")

//* VARIABLES GLOBALES DEL JUEGO
// Bus
// Obstáculos+parkings
// variables de intervalos
let busObj = null;
let parkingArray = [];
let obstaclesArray = [];
let mainIntervalId = null;
let timerIntervalId = null;


//* FUNCIONES GLOBALES DEL JUEGO
// Inicio de juego sobre botón de inicio de juego
function startGame() {
   // Inicia la música
   backgroundMusicNode.play();
   backgroundMusicNode.volume = 0.4;
  // reiniciar los valores del juego
  parkingArray = [];
  obstaclesArray = [];
  //reiniciar el score
  scoreNode.innerText = 0;
  // Iniciar el temporizador
  startTimer();
  // console.log("iniciando juego");
  // 1)ocultar la pantalla de inicio
  gameStartNode.style.display = "none";
  // 2)mostrar la pantalla de juego
  gameScreenNode.style.display = "flex";
  // 3)Añadir los elementos iniciales de juego
  busObj = new Bus();
  obstaclesAppear();
  parkingAppear();
  //console.log(busObj)
  // 4)iniciar intervalo inic. del juego (gameLoop)
  mainIntervalId = setInterval(() => {
    gameLoop();
  }, Math.round(1000 / 60));
  // 5) intervalos que determinarían la frecuencia en la que aparecen los elementos del juego.
}
// función de movimiento loop que se ejecuta a 60 fps
// movimientos automáticos, checkeos de colisiones, animaciones
function gameLoop() {
  // console.log("juego andando a 60fps");
  busParkingCollision();
  busObstaclesCollision();
  updatePlayerMovement();
}
function startTimer() {
  let seconds = 30; // añado el tiempo
  timerNode.innerText = seconds; //igualo a seconds el nodo
  
  clearInterval(timerIntervalId);
  timerIntervalId = setInterval(() => {
    seconds--;
    timerNode.innerText = seconds; //condicionar el nodo a los segundos hasta 0.
    if (seconds <= 0) {
      clearInterval(timerIntervalId);
      gameOver();
    }
  }, 1000);
}
// PARKING. aparecer, colisión y desaparecer
function parkingAppear() {
  //variable de arrays posiciones deseadas en X
  //randomización de cualquiera de las 5
  //aplicación a su ubicación
  let posiblesXPark1 = [450, 580, 710, 840];
  let randomXPark1 = Math.floor(Math.random() * posiblesXPark1.length);
  let positionXPark1 = posiblesXPark1[randomXPark1];

  let parkingObj1 = new Parking(positionXPark1, 100);
  parkingArray.push(parkingObj1);

  //segunda señal de Parking
  let randomXPark2 = Math.floor(Math.random() * posiblesXPark1.length);
  let positionXPark2 = posiblesXPark1[randomXPark2];
  let parkingObj2 = new Parking(positionXPark2, 520);

  parkingArray.push(parkingObj2);
}

function busParkingCollision() {
  parkingArray.forEach((eachParking) => {
    //eachParking sería uno
    //busObj es el otro
    //necesitamos verificar si están colisionando
    if (
      busObj.x < eachParking.x + eachParking.w &&
      busObj.x + busObj.w > eachParking.x &&
      busObj.y < eachParking.y + eachParking.h &&
      busObj.y + busObj.h > eachParking.y
    ) {
      // Si Collision detectada
      nextLevel();
    }
  });
}

//OBSTÁCULOS. aparecer, colisión, desaparecer

function obstaclesAppear() {
  let randomPositionXObj1 = Math.floor(Math.random() * (1180 - 500) + 300);
  let randomPositionYObj1 = Math.floor(Math.random() * (400 - 200) + 200);
  let randomPositionXObj2 = Math.floor(Math.random() * (1180 - 500) + 300);
  let randomPositionYObj2 = Math.floor(Math.random() * (400 - 200) + 200);

  let obstaclesObj1 = new Obstacles(randomPositionXObj1, randomPositionYObj1);
  obstaclesArray.push(obstaclesObj1);

  let obstaclesObj2 = new Obstacles(randomPositionXObj2, randomPositionYObj2);
  obstaclesArray.push(obstaclesObj2);
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
      gameOver();
    }
  });
}

function gameOver() {
  //aquí removemos todo lo que hay dentro del DOM
  console.log("game over");
  parkingArray.forEach((eachParking) => {
    eachParking.node.remove();
  });
  obstaclesArray.forEach((eachObstacle) => {
    eachObstacle.node.remove();
  });
  busObj.node.remove();
  // 1 - limpiar todos los intervalos
  clearInterval(mainIntervalId);
  clearInterval(timerIntervalId);
  parkingArray = [];
  obstaclesArray = [];
  // 2 - ocultar pantalla de juego
  gameScreenNode.style.display = "none";
  // 3 - mostrar la pantalla final
  gameRestartNode.style.display = "flex";
  // igualar finalScoreNode del restart al score del juego
  finalScoreNode.innerText = scoreNode.innerText;
  // música
  backgroundMusicNode.pause();
  backgroundMusicNode.currentTime = 0;
  gameOverMusicNode.play();
  gameOverMusicNode.volume = 0.4;
}

function nextLevel() {
  //aquí removemos todo lo que hay dentro del DOM
  console.log("next level");
  parkingArray.forEach((eachParking) => {
    eachParking.node.remove();
  });
  obstaclesArray.forEach((eachObstacle) => {
    eachObstacle.node.remove();
  });
  busObj.node.remove();
  //aquí reiniciamos y creamos los nuevos elementos en JS
  // el bus vuelve a la posición inicial
  busObj = new Bus();
  // limpiar los arrays de obstaculos y parking
  parkingArray = [];
  obstaclesArray = [];
  // aparecen nuevos parking y nuevos obstaculos
  obstaclesAppear();
  parkingAppear();
  //score que suma 1 uds cada vez que desaparece
  scoreNode.innerText++;
}

//* EVENT LISTENERS
// addEventListener de botón de inicio de juego
startBtnNode.addEventListener("click", () => {
  startGame();
});
//////////////////////////////////////////////////////
// window.addEventListener("keydown", (event) => {
//   if (event.key === "ArrowRight") {
//     busObj.movement("Right");
//   } else if (event.key === "ArrowLeft") {
//     busObj.movement("Left");
//   } else if (event.key === "ArrowUp") {
//     busObj.movement("Up");
//   } else if (event.key === "ArrowDown") {
//     busObj.movement("Down");
//   }
// });
//////////////////////////////////////////////////////

window.addEventListener("keydown", (event) => {
  handleKey(event, true);
});

window.addEventListener("keyup", (event) => {
  handleKey(event, false);
});

function handleKey(event, isKeyDown) {
  if (event.key === "ArrowRight") {
    Keys.right = isKeyDown;
  } else if (event.key === "ArrowLeft") {
    Keys.left = isKeyDown;
  } else if (event.key === "ArrowUp") {
    Keys.up = isKeyDown;
  } else if (event.key === "ArrowDown") {
    Keys.down = isKeyDown;
  }
}

let Keys = {
  up: false,
  down: false,
  left: false,
  right: false,
};
function updatePlayerMovement() {
  if (Keys.right) {
    busObj.movement("Right");
  }
  if (Keys.left) {
    busObj.movement("Left");
  }
  if (Keys.up) {
    busObj.movement("Up");
  }
  if (Keys.down) {
    busObj.movement("Down");
  }
}

/////////////////////////////////////////////////////
restartBtnNode.addEventListener("click", function () {
  gameRestartNode.style.display = "none";
  startGame();
});
