function startGame(playerSelection) {
    let machineSelection = createRandomSelection()
    let playInformation = play(machineSelection, playerSelection)
    let result = playInformation[0]
    alert(result)
    setScoreTable(playInformation)
}

function play(machineSelection, playerSelection) {
    let playInformation = []

    if (playerSelection === machineSelection) {
        result = 'Draw'
    }
        //Rock Win Condition
    else if (playerSelection === 'rock' && machineSelection === 'scissors') {
        result = 'You Win'
    }
        //Paper Win Condition
    else if (playerSelection === 'paper' && machineSelection === 'rock') {
       result = 'You Win'
    }
        //Scissors Win Condition
    else if (playerSelection === 'scissors' && machineSelection === 'paper') {
        result = 'You Win'
    }
    else{
        result = 'You Lose'
    }

    playInformation.push(result,playerSelection, machineSelection)
    return playInformation
}

function createRandomSelection() {
    //Rock Paper Scissors Choses
    let randomNum = Math.floor(Math.random() * (3) + 1) 
    let selection = ''

    if(randomNum === 1){
        selection = 'rock'
    }
    if(randomNum === 2){
        selection = 'paper'
    }
    if(randomNum === 3){
        selection = 'scissors'
    }
    
    return selection
}

function setScoreTable(playInformation) {
    //Score Table
    var scoreTable = document.getElementById('scoreTable');
    var score = document.createElement('p');
    score.textContent = `${playInformation[0]} , YOU(${playInformation[1].toUpperCase()}) vs BOT(${playInformation[2].toUpperCase()}))`;
    scoreTable.appendChild(score);
}
