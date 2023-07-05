// ----Variables---- //

var time = 60;
var currentQuestion = 0;

var startButton = document.getElementById("start");
var questionEl = document.getElementById("question");
var answerChoices = document.getElementById("answer-choices");
var submitButton = document.getElementById("submit");
var userInitials = document.getElementById("initials");

// ----Start Quiz---- //

startButton.addEventListener("click", startQuiz);

function startQuiz(){
    startButton.style.display = "none";
    timerInterval = setInterval(updateTimer, 1000);
    nextQuestion();
}

// ----Timer---- //

// Timer stolen from lesson 9
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
    time--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if(time === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
    }

    }, 1000);
}

// ----Next Question---- //