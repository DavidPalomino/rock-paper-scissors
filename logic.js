function game(election) {
    let selection = 0
    let counter = 0
    let autoSelection = ''
    let randomNum = Math.floor(Math.random() * ( 3 - 1 + 1) + 1) 

    //Rock Paper Scissors Choses
    if(randomNum === 1){
        autoSelection = 'rock'
    }
    if(randomNum === 2){
        autoSelection = 'paper'
    }
    if(randomNum === 3){
        autoSelection = 'scissors'
    }

    //Game
        //Draw
    if (election === autoSelection) {
        alert("Draw")
    }
        //Rock Win Condition
    else if (autoSelection === 'rock' && election === 'scissors') {
        alert('You Win')
    }

        //Paper Win Condition
    else if (autoSelection === 'paper' && election === 'rock') {
       alert('You Win')
    }
    
        //Scissors Win Condition
    else if (autoSelection === 'scissors' && election === 'paper') {
        alert('You Win')
    }
    
    else{
        alert('You Lose')
    }
    
}
