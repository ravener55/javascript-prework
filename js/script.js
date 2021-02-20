/*
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
  
  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else {
      printMessage('Tym razem przegrywasz :(');
    }
*/
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);///////////////////////////////
if(randomNumber == 1){
    computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nożyce';
}
printMessage('Ruch komputera: ' + computerMove);

let playerMove = getMoveName(randomNumber);/////////////////////////////////////
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Mój ruch: ' + playerInput);
if(playerInput == 1){
    playerMove = 'kamień';
}   else if(playerInput == 2){
    playerMove = 'papier';
}    else if(playerInput == 3){
    playerMove = 'nożyce';
}
printMessage('Ruch gracza: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
} else if( computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
} else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Komputer wygrywa!');
} else if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
} else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!');
} else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
}if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
} else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Komputer wygrywa!');
} else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!');
}




////////////////////////////////////////////////////////

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }
  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }



////////////////////////////////////////////////////////


/*
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);
*/



/* śmieci
if(1 > 2){
	printMessage('Niesamowite! Jeden jest większe niż dwa!!!');
} else if (1 == 2) {
	printMessage('Dziwne – jeden jest równe dwa?!');
} else {
	printMessage('Wszystko po staremu, jeden jest mniejsze niż dwa.');
}


printMessage('Mój ruch to: ' + computerMove);
*/
/*
KODILLAKOPIA
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);
*/

/*
MOJE
let randomFraction = Math.random();

// wywołanie funkcji z jednym argumentem
printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 9 + 11;

printMessage('Ułamek pomnożony przez 9 i powiększony o 11: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);
*/


/* DODATKI DO WYJAŚNIENIA
let randomNumber = Math.floor(Math.random() * 9 + 11);
printMessage('Wylosowana liczba z zakresu od 11 do 19 to: ' + roundNumber);
/*




// let randomNumber = Math.flooralert(rand(11, 19));
// printMessage('Wylosowana liczba z zakresu od 11 do 19 to: ' + roundNumber);

// let randomNumber = alert(rand(11, 19));

// Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10
*/