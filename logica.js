const readlineSync = require('readline-sync');

function getComputerChoice() {
  var numberRandom = Math.floor(Math.random() * 3);
  return numberRandom;
}

function playerRound() {
  const wordList = ["ROCA", "PAPEL", "TIJERA"];
  var wordsGame = wordList[getComputerChoice()];
  var userWord = readlineSync.question("Ingrese una Palabra: piedra, papel o tijera: ").toUpperCase();

  if (wordsGame === userWord) {
    console.log("Maquina: " + wordsGame + "\nUsuario: " + userWord + "\nUsted ha empatado");
  } else if (
    (wordsGame === "ROCA" && userWord === "TIJERA") ||
    (wordsGame === "TIJERA" && userWord === "PAPEL") ||
    (wordsGame === "PAPEL" && userWord === "PIEDRA") ) {
    puntajeDesckop++;
    console.log("Maquina: " + wordsGame + "\n Usuario: " + userWord + "\nUsted ha perdido");
  } else {
    userPuntaje++;
    console.log("Maquina: " + wordsGame + "\nUsuario: " + userWord + "\nUsted ha GANADO, FELICIDADES..!");
  }
}

var userPuntaje = 0;
var puntajeDesckop = 0;

for (var i = 0; i <= 5; i++) {
  playerRound();
}

if (userPuntaje > puntajeDesckop) {
  console.log("Felicidades usted ganó, su puntaje es: " + userPuntaje + ", y el de la máquina " + puntajeDesckop);
} else if (userPuntaje < puntajeDesckop) {
  console.log("Lo lamento, mejor suerte la próxima, perdió. Su puntaje es: " + userPuntaje + ", y el de la máquina " + puntajeDesckop);
} else {
  console.log("Usted y la máquina empataron, su puntaje: " + userPuntaje + " y el de la máquina " + puntajeDesckop);
};