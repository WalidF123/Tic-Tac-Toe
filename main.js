// Declaring Variables

var startScreen = document.querySelector('#start');
var gameScreen = document.querySelector('#gameContent');
var winnerScreen = document.querySelector('#winner');
var fatalityPopup = document.querySelector('.fatal');
var tiePopup = document.querySelector('.tie');

var music = document.querySelector('audio')
var musicOn = false
var musicBtn = document.querySelector("#music-btn").addEventListener("click", function () {
    if (musicOn) {
        musicOn = false
        playMusic()
    } else {
        musicOn = true
        playMusic()
    }
});

var startBtn = document
.querySelector("#start-btn").addEventListener("click", function () {
    startScreen.style.display = "none";
    gameScreen.style.display = "";
    fight();
});

var playAgainBtn = document.querySelector("#playAgain-btn").addEventListener("click", function () {
    gameRestart();
});

var g1 = document.querySelector('.gridOne');
var g2 = document.querySelector('.gridTwo');
var g3 = document.querySelector('.gridThree');
var g4 = document.querySelector('.gridFour');
var g5 = document.querySelector('.gridFive');
var g6 = document.querySelector('.gridSix');
var g7 = document.querySelector('.gridSeven');
var g8 = document.querySelector('.gridEight');
var g9 = document.querySelector('.gridNine');

var playerOneScore = document.querySelector('.p1Score');
var playerTwoScore = document.querySelector('.p2Score');

var playerOneWin = false;
var playerTwoWin = false;
var resultTie = false;
var toggle = true;

var p1Fight = document.querySelector('.p1Fight');
var p2Fight = document.querySelector('.p2Fight');

var winner = document.querySelector('.winnerName');
var winnerPic = document.querySelector('.winnerPic');
var p1finalScore = document.querySelector('.p1finalScore');
var p2finalScore = document.querySelector('.p2finalScore');


//functions

eventListener()
function eventListener() {
    [g1, g2, g3, g4, g5, g6, g7, g8, g9].forEach((gridBlocks)=>{
        gridBlocks.addEventListener('click', playerIcon, {once: true})
    });
}



function removeListener() {
    [g1, g2, g3, g4, g5, g6, g7, g8, g9].forEach((gridBlocks)=>{
        gridBlocks.removeEventListener('click', playerIcon, {once: true})
    });
}

gameStart()
function gameStart() {
    startScreen.style.display = "";
    gameScreen.style.display = "none";
    fatalityPopup.style.display = "none";
    tiePopup.style.display = "none";
    winnerScreen.style.display = "none";
}

function playMusic() {
    if (musicOn) {
        music.play()
    } else {
        music.pause()
    }
}

function gameEnd () {
    fatalityPopup.style.display = "none";
    gameScreen.style.display = "none";
    tiePopup.style.display = "none";
    winnerScreen.style.display = "";
}

function gameRestart() {
    gameStart();
    resetBoard();
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;
}

function resetBoard () {
    g1.innerHTML = '';
    g2.innerHTML = '';
    g3.innerHTML = '';
    g4.innerHTML = '';
    g5.innerHTML = '';
    g6.innerHTML = '';
    g7.innerHTML = '';
    g8.innerHTML = '';
    g9.innerHTML = '';
    playerOneWin = false;
    playerTwoWin = false;
    toggle = true
    resultTie = false;
    p1Fight.innerHTML = '';
    p2Fight.innerHTML = '';
    fight();
    eventListener();
    fatalityPopup.style.display = "none";
    tiePopup.style.display = "none";
}

function fight () {
    if (toggle && Number(playerOneScore.textContent) < 2) {
        p1Fight.innerHTML = '<h1>FIGHT!</h1>';
        p2Fight.innerHTML = '';
    } else if (toggle && Number(playerOneScore.textContent) === 2) {
        p1Fight.innerHTML = '<h1>FINISH HIM</h1>';
        p2Fight.innerHTML = '';
    } else if (toggle === false && Number(playerTwoScore.textContent) < 2) {
        p1Fight.innerHTML = '';
        p2Fight.innerHTML = '<h1>FIGHT!</h1>';
    } else if (toggle === false && Number(playerTwoScore.textContent) === 2) {
        p1Fight.innerHTML = '';
        p2Fight.innerHTML = '<h1>FINISH HIM</h1>';
    }
}

fight(); //sets player one to fight status before initial click on grid

function playerIcon(event){
    var blockClicked = event.target;
    if (toggle && blockClicked.innerHTML === '') {
        blockClicked.innerHTML = '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">';
        checkP1Win();
        checkTie();
        if (playerOneWin === true && Number(playerOneScore.textContent) < 2) {
            playerOneScore.textContent = Number(playerOneScore.textContent) + Number(1);
            fatalityPopup.style.display = "";
            removeListener();
            setTimeout(function () {
                resetBoard();
                }, 2000); 
        } else if (playerOneWin === true && Number(playerOneScore.textContent) === 2) {
            playerOneScore.textContent = Number(playerOneScore.textContent) + Number(1);
            fatalityPopup.style.display = "";
            winner.innerHTML = '<h1>LUIGI</h1>';
            winnerPic.innerHTML = '<img src="./ASSETS/Luigi-portrait.jpeg" alt="">';
            p1finalScore.textContent = playerOneScore.textContent;
            p2finalScore.textContent = playerTwoScore.textContent;
            setTimeout(function () {
                gameEnd();
                }, 2000);
        }
         else if (resultTie === true) {
            tiePopup.style.display = "";
            setTimeout(function () {
                resetBoard();
                }, 2000); 
        } else {
            toggle = false;
            fight();
        }

    } else if (blockClicked.innerHTML === '') {
        blockClicked.innerHTML = '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">';
        checkP2Win();
        checkTie();
        if (playerTwoWin === true && Number(playerTwoScore.textContent) < 2) {
            playerTwoScore.textContent = Number(playerTwoScore.textContent) + Number(1);
            fatalityPopup.style.display = "";
            setTimeout(function () {
                resetBoard();
                }, 2000); 
        } else if (playerTwoWin === true && Number(playerTwoScore.textContent) === 2) {
            playerTwoScore.textContent = Number(playerTwoScore.textContent) + Number(1);
            fatalityPopup.style.display = "";
            winner.innerHTML = '<h1>BOWSER</h1>';
            winnerPic.innerHTML = '<img src="./ASSETS/BowserPortrait.jpeg" alt="">';
            p1finalScore.textContent = playerOneScore.textContent;
            p2finalScore.textContent = playerTwoScore.textContent;
            setTimeout(function () {
                gameEnd();
                }, 2000); 
        } else if (resultTie === true) {
            tiePopup.style.display = "";
            setTimeout(function () {
                resetBoard();
                }, 2000); 
        }  else {
            toggle = true;
            fight();
        }
    }
}

// Function to check if player one wins

function checkP1Win() {
    if (g1.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g2.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g3.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">'){
        playerOneWin = true;

    } else if (g1.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g4.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g7.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">') {
        playerOneWin = true;

    } else if (g1.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g5.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g9.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">') {
        playerOneWin = true;

    } else if (g2.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g5.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g8.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">') {
        playerOneWin = true;

    } else if(g3.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g5.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g7.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">') {
        playerOneWin = true;

    } else if(g3.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g6.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g9.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">') {
        playerOneWin = true;

    } else if(g4.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g5.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g6.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">') {
        playerOneWin = true;

    } else if(g7.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g8.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g9.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">'){
        playerOneWin = true;

    } else if (g3.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g5.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">' && g7.innerHTML === '<img class="playerOneMove" src="./ASSETS/Luigi-attack.jpeg" alt="">'){
        playerOneWin = true;
    }
}

// Function to check if player two wins

function checkP2Win() {
    if (g1.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g2.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g3.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">'){
        playerTwoWin = true;

    } else if (g1.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g4.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g7.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">'){
        playerTwoWin = true;

    } else if (g1.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g5.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g9.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">'){
        playerTwoWin = true;
    
    } else if (g2.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g5.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g8.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">') {
        playerTwoWin = true;
    } else if (g3.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g5.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g7.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">') {
        playerTwoWin = true;ƒgam
    } else if (g3.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g6.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g9.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">') {
        playerTwoWin = true;
    } else if (g4.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g5.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g6.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">') {
        playerTwoWin = true;
    } else if (g7.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g8.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">' && g9.innerHTML === '<img class="playerTwoMove" src="./ASSETS/Bowser-attack.jpeg" alt="">') {
        playerTwoWin = true;
    }
}

// Function to check if game is tied

function checkTie() {
    if (g1.innerHTML !== '' && g2.innerHTML !== '' && g3.innerHTML !== '' && g4.innerHTML !== '' && g5.innerHTML !== '' && g6.innerHTML !== '' && g7.innerHTML !== '' && g8.innerHTML !== '' && g9.innerHTML !== '') {
        resultTie = true;
    }
}

