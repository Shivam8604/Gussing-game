let input = document.getElementById('input');
let btn = document.getElementById("btn");
let wrng = document.querySelector(".wrng");
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random()*100)+1;

let numGuesses = 0;

btn.addEventListener("click",()=>{
    guessesNumber();
})
function guessesNumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value)){
        wrng.innerHTML = "Enter between 1 to 100" 
    }else{
        numGuesses++;
        guesses.innerHTML = "No. of Guess : " + numGuesses
        if(input.value > answer){
            wrng.innerHTML = "You Guesse to Hight !";
            input.value = '';
        }else if(input.value < answer){
            wrng.innerHTML = "You Guessed too Low !";
            input.value = "";
        }else{
            wrng.innerHTML="Congratulation You Guessed the correct answer";
            btn.disabled = true;
            setTimeout(()=>{
                resetGame();
            },5000)
        }
    }
}

function resetGame(){
    numGuesses = 0;
    answer = Math.floor(Math.random()*100)+1;
    input.value = ' ';
    wrng.innerHTML = '';
    btn.disabled = false;
    guesses.innerHTML = "No. of Guess : 0"
}