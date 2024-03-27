// generating the secret number

let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);

let score = 20;
let highscore = 0;

//Logic
document.getElementById("checkbtn").addEventListener("click", () => {
    const guessedNo = Number(document.getElementById("guess").value);

    //if no input
    if (guessedNo == "") {
        document.querySelector(".message").textContent = "No Number";
    }
    //when player wins
    else if (guessedNo === secretNumber) {
        
        if (score > highscore) {
            highscore=score;
            
            document.querySelector(".label-highscore span").textContent = highscore;
            
            
        }
        document.getElementById("checkbtn").style.pointerEvents='none';
        document.querySelector(".message").textContent = "Correct Number";
        document.querySelector(".number").textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "green";
        
        

    }

    else if (guessedNo > secretNumber) {
        if (score > 0) {
            document.querySelector(".message").textContent = "Too High";
            
            score--;
            document.querySelector(".label-score span").textContent = score;
        }
    }
    else if (guessedNo < secretNumber) {
        if (score > 0) {
            document.querySelector(".message").textContent = "Too Low";
            
            score--;
            document.querySelector(".label-score span").textContent = score;
        }
    }
    
    
        
        
    
    if (guessedNo > 20) {
        document.querySelector(".message").textContent = "Please Enter The Number Between 1 To 20";
        document.querySelector(".message").style.color = "red";
    }
    if (score == 0) {

        document.querySelector(".message").textContent = "You Lost The Game";
        document.querySelector(".message").style.color = "white";
        document.querySelector("body").style.backgroundColor = "red";

    }

})



//For again button to reset everything

document.querySelector(".again").addEventListener("click", () => {

    secretNumber = Math.floor(Math.random() * 20 + 1);
    console.log(secretNumber);
    score = 20;
    document.getElementById("guess").value = "";
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".label-score span").textContent = score;
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".number").textContent = "?";
    document.getElementById("checkbtn").style.pointerEvents='auto';

})

