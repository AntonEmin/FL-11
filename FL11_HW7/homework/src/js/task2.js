if (confirm('Do you want to play a game?')) {
    let startRange = 8;
    let attempts = 3;
    let firstAttempt = 3;
    let secondAttempt = 2;    
    let firstAttemptPrize = 100;
    let secondAttemptPrize = 50;
    let thirdAttemptPrize = 25;
    let loop = 0;
    const rangeStep = 4;
    let totalPrize = 0;  
    let wantPlayGame = true;
    let gameWin = false;
    do {
        let randomRange = startRange + rangeStep*loop;
        let randomNumber = Math.floor(Math.random() * randomRange);
        console.log(randomNumber);        
        do {
            let prizePull = 0;
            const prizePullStep = 2;
            if (attempts === firstAttempt) {
                prizePull = firstAttemptPrize * Math.pow(prizePullStep, loop);
            } else if (attempts === secondAttempt) {
                prizePull = secondAttemptPrize * Math.pow(prizePullStep, loop);
            } else {
                prizePull = thirdAttemptPrize * Math.pow(prizePullStep, loop);
            }
            let userNumber = parseInt(prompt('Choose a roulette pocket number from 0 to ' + randomRange +
            '\nAttempts left: ' + attempts + '\nTotal prize: ' + totalPrize + '$\nPossible prize on current attempt: ' +
            prizePull + '$',''));
            if (isNaN(userNumber) || userNumber < 0 || userNumber > randomRange ) {
                alert('Entered data isn’t number or out of range');                
            } else if (userNumber === randomNumber){
                totalPrize += prizePull;
                gameWin = true;
                attempts = 0;
            } else {
                alert('You guessed wrong number.')
            }
            attempts -= 1;
        } while(attempts > 0)
        if (gameWin) {
            if (confirm('Congratulation, you won!\nYour prize is: '+ totalPrize +'$\nDo you want to continue?')) {
                loop += 1;
                attempts = firstAttempt;
            } else {
                alert('Thank you for your participation.\nYour prize is: '+ totalPrize +'$');
                if (confirm('Do you want to play again?')) {
                    loop += 1;
                    attempts = firstAttempt;
                } else {
                    wantPlayGame =false;
                }
            }
        } else {
            alert('Thank you for your participation.\nYour prize is: '+ totalPrize +'$');
            if (confirm('Do you want to play again?')) {
                attempts =firstAttempt;
            } else {
                wantPlayGame = false;
            }
        }
    }while(wantPlayGame === true)
} else {
    alert('You did not become a billionaire, but can.');
}