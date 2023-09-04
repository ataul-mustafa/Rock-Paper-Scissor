
const gameBox = document.getElementById('game');
const playBox = document.getElementById('playBox');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

const myIcon = document.getElementById('me');
const pcIcon = document.getElementById('pc');
const result = document.getElementById('rsult');

const myScore = document.getElementById('myScore');
const pcScore = document.getElementById('pcScore');

const playAgain = document.getElementById('playAgain');
const nextButton = document.getElementById('next');

const againstPC = document.getElementById('againstPC');


myScore.innerHTML = localStorage.getItem('you') || 0;
pcScore.innerHTML = localStorage.getItem('pc') || 0;

let myChoice, pcChoice, winner;

playAgain.addEventListener('click', ()=> {
    location.reload();
})

const choices = ['rock', 'paper', 'scissor'];
const getPCChoice = () => {
    const num = Math.floor(Math.random()*3);
    const pc = choices[num];

    if(pc == 'rock'){

        pcIcon.src = './images/icons8-fist-67 1.png';
        pcIcon.style.borderColor = 'rgb(22, 230, 195)';

    } else if (pc == 'paper') {

        pcIcon.src = './images/icons8-hand-64 1.png';
        pcIcon.style.borderColor = 'rgb(7, 189, 22)'

    } else {

        pcIcon.src = './images/17911 1.png';
        pcIcon.style.borderColor = 'rgb(192, 25, 226)';

    }

    return pc;
}

const getWinner = (myChoice) =>{

    gameBox.style.display = 'none';
    playBox.style.display = 'flex';

    pcChoice = getPCChoice();

    if(myChoice == 'rock'){

        myIcon.src = './images/icons8-fist-67 1.png'
        myIcon.style.borderColor = 'rgb(22, 230, 195)';

        if(pcChoice == 'scissor'){
            winner = 'me';
        } else if (pcChoice == 'paper'){
            winner = 'pc';
        } else if (pcChoice == 'rock'){
            winner = 'tie';
        }


    } else if( myChoice == 'scissor'){

        myIcon.src = './images/17911 1.png'
        myIcon.style.borderColor = 'rgb(192, 25, 226)';

        if(pcChoice == 'paper'){
            winner = 'me';
        } else if (pcChoice == 'rock'){
            winner = 'pc';
        } else if(pcChoice == 'scissor'){
            winner = 'tie';
        }

    } else if( myChoice == 'paper'){

        myIcon.src = './images/icons8-hand-64 1.png'
        myIcon.style.borderColor = 'rgb(7, 189, 22)'

        if(pcChoice == 'rock'){
            winner = 'me';
        } else if (pcChoice == 'scissor'){
            winner = 'pc';
        } else if(pcChoice == 'paper'){
            winner = 'tie';
        }

    }


    if(winner == 'me'){

        pcIcon.style.animation = 'none';
        result.innerHTML = 'You Win';

        // playAgain.style.display = 'none';
        nextButton.style.display = 'inline-block';

        // myScoreValue = myScoreValue + 1;
        if(localStorage.getItem("you")){
            localStorage.setItem("you", parseInt(localStorage.getItem("you"))+1)
        } else {
            localStorage.setItem("you", parseInt(localStorage.getItem("you")) || 0+1)
        }

    
        // alert(myScoreValue);

    } else if(winner == 'pc'){


        result.innerHTML = 'You Lost';
        myIcon.style.animation = 'none';

        // pcScoreValue = pcScoreValue + 1;
        if(localStorage.getItem("pc")){
            localStorage.setItem("pc", parseInt(localStorage.getItem("pc"))+1)
        } else {
            localStorage.setItem("pc", parseInt(localStorage.getItem("pc")) || 0+1)
        }
        

        // alert(pcScoreValue);

        
    } else if(winner == 'tie'){

        result.innerHTML = 'Tie Up';
        pcIcon.style.animation = 'none';
        myIcon.style.animation = 'none';
        againstPC.innerHTML = "";

    }

    myScore.innerHTML = localStorage.getItem('you') || 0;
    pcScore.innerHTML = localStorage.getItem('pc') || 0;
    

    // alert(localStorage.getItem('you'));

    return winner;
}



rock.addEventListener('click', ()=>{
    myChoice = 'rock';
    getWinner(myChoice);


})
paper.addEventListener('click', ()=>{
    myChoice = 'paper';
    getWinner(myChoice);

})
scissor.addEventListener('click', ()=>{
    myChoice = 'scissor';
    getWinner(myChoice);

})

const rulesButton = document.getElementById('rulesButton');
const rulesBox = document.getElementById('rulesBox');
const closeIcon = document.getElementById('closeIcon');


rulesButton.addEventListener('click',()=>{
    if(rulesBox.style.display == 'none'){
        rulesBox.style.display = 'block';
    }else {
        rulesBox.style.display = 'none';
    }
})

closeIcon.addEventListener('click', ()=>{
    rulesBox.style.display = 'none';
})