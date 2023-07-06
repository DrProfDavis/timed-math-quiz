// Variables

var questionBtnEl = document.getElementById('question-btn');
var questionDisplayEl = document.getElementById('question-display');
var startButton = document.getElementById("start-btn");
var currentQuestion = 0;

var questionsArray = [{
    question: "2 + 3 = 5",
    choices: ["True", "False"],
    answer: "True"
},{
    question: "5 - 3 = 8",
    choices: ["True", "False"],
    answer: "False"
}]

// Start Quiz

startButton.addEventListener("click", startQuiz);

function startQuiz(){
    startButton.style.display = "none";
    nextQuestion();
}

// Timer



// Answer Question



// Next Question

function nextQuestion(){
    var currentQuizData = questionsArray[currentQuestion];
    questionDisplayEl.innerText = currentQuizData.question;
    console.log(questionsArray[currentQuestion]);
}

// End Timer



// Score keeper



