// random value generated 
const y = Math.floor(Math.random() * 100 + 1); 
console.log(y);
        
// counting the number of guesses 
// made for correct Guess 
let guess = 0; 
const result=document.getElementById('result');
        
document.getElementById("submitguess").onclick = function(){ 
    // number guessed by user	 
    if(guess==5){
        alert('Game Over, Try again!')
        location.reload()
        return;
    }
    const x = document.getElementById("guessField").value; 
        
    if(x == y) {
        result.innerHTML=(`<h2 id="answer">You are the winner &#128521 You guest after
        ${guess} times!</h2>`); 
    } else if(x > y) {	/* if guessed number is greater 
                        than actual number*/ 
        guess++; 
        result.innerHTML=(`<h2 id="answer">I am thinking about lower number</h2>
        <div id="count_it"> This is your guess number: ${guess}</div>`);
    } else{ 
        guess++; 
        result.innerHTML=(`<h2 id="answer">I am thinking about higher number</h2>
        <div id="count_it"> This is your guess number: ${guess}</div>`)
    } 
    document.getElementById('guessField').value=''
    document.getElementById('guessField').focus()
} 