// Variables

var titleEl = document.getElementById('title');
var scoreTitleEl = document.getElementById('score-title');
var trueBtnEl = document.getElementById('true-btn');
var falseBtnEl = document.getElementById('false-btn');
var questionDisplayEl = document.getElementById('question-display');
var initialInputEl = document.getElementById('initial-input');
var startButtonEl = document.getElementById("start-btn");
var timeLeftEl = document.getElementById("timeLeft");
var currentQuestion = 0;
var truthOfQuestion = true;
var currentScore = 0;
var quizSeconds = 10;
var quizSecondsTicker = 0;

trueBtnEl.style.display = "none";
falseBtnEl.style.display = "none";
scoreTitleEl.style.display = "none";

var questionsArray = [{
    question: "2 + 3 = 5",
    answer: "True"
},{
    question: "5 - 3 = 8",
    answer: "False"
},{
    question: "4 + 3 = 7",
    answer: "True"
},{
    question: "7 - 3 = 5",
    answer: "False"
},{
    question: "6 + 2 = 8",
    answer: "True"
},{
    question: "9 - 2 = 6",
    answer: "False"
},{
    question: "6 + 3 = 9",
    answer: "True"
},{
    question: "3 - 4 = 1",
    answer: "False"
},{
    question: "6 + 1 = 7",
    answer: "True"
},{
    question: "9 - 3 = 5",
    answer: "False"
},{
    question: "4 * 3 = 12",
    answer: "True"
},{
    question: "9 / 3 = 6",
    answer: "False"
},{
    question: "2 * 3 = 6",
    answer: "True"
},{
    question: "3 / 6 = 2",
    answer: "False"
},{
    question: "6 / 2 = 3",
    answer: "True"
},{
    question: "9 * 1 = 10",
    answer: "False"
},{
    question: "8 / 4 = 2",
    answer: "True"
},{
    question: "1 * 1 = 2",
    answer: "False"
},{
    question: "2 / 2 = 1",
    answer: "True"
},{
    question: "3 * 3 = 6",
    answer: "False"
}]

// Start Quiz

startButtonEl.addEventListener("click", startQuiz);

function startQuiz(){
    startButtonEl.style.display = "none";
    trueBtnEl.style.display = "initial";
    falseBtnEl.style.display = "initial";
    quizTimer();
    nextQuestion();
}

// Timers

function quizTimer(){
    myTimer = setTimeout(scoreKeeper, 10000);
    myTimerUpdate = setInterval(quizTimerUpdate, 999);
}

function quizTimerUpdate(){
    var seconds = quizSeconds - quizSecondsTicker;
    quizSecondsTicker++;
    document.getElementById("timeLeft").innerHTML = seconds - 1;
}

// Answer Question

function answerQuestion(){
    console.log("im in the answer question function");
    trueBtnEl.addEventListener("click", answeredTrue);
    falseBtnEl.addEventListener("click", answeredFalse);
}

function answeredTrue(){
    if (truthOfQuestion == "True"){
        currentScore++;
        console.log("You answered True and you were correct! Your current score is " + currentScore);
    }
    else {
        console.log("You answered True and you were wrong! Your current score is " + currentScore);
    }
    currentQuestion++;
    nextQuestion();
}

function answeredFalse(){
    if (truthOfQuestion == "True"){
        console.log("You answered False and you were wrong! Your current score is " + currentScore);
    }
    else {
        currentScore++;
        console.log("You answered False and you were correct! Your current score is " + currentScore);
    }
    currentQuestion++;
    nextQuestion();
}

// Next Question

function nextQuestion(){
    if (currentQuestion == questionsArray.length){
        console.log("No More Questions!");
        clearTimeout(myTimer);
        scoreKeeper();
    } 
    else {
        var currentQuizData = questionsArray[currentQuestion];
        questionDisplayEl.innerText = currentQuizData.question;
        truthOfQuestion = currentQuizData.answer;
        console.log("truthOfQuestion changed to " + truthOfQuestion);
        answerQuestion();
    }
}

// Score keeper

function scoreKeeper(){
    trueBtnEl.style.display = "none";
    falseBtnEl.style.display = "none";
    titleEl.style.display = "none";
    scoreTitleEl.style.display = "initial";
    questionDisplayEl.style.display = "none";
    clearInterval(myTimerUpdate);
    let winnerInitials = prompt("Please enter your Initials", "AAA");
    if (winnerInitials.length < 4 && winnerInitials.length > 0) {
        console.log("Initials excepted")
    } else {
        alert("Please insert initials. Cannot be blank and must be under 4 characters")
        scoreKeeper();
    }
}

