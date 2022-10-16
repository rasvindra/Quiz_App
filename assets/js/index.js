var time = 30
var timeLeft = 30
var timeEl = document.getElementById("inSeconds")
var timeKeeper = ""
var currentScore = ""


var allQuestions = [

{
    question: "Which U.S. President was inducted in the National Wrestling Hall of Fame in 1992?",
    answers: { 
        a: "Bill Clinton",
        b: "John F Kennedy",
        c: "Abraham Lincoln",
        d: "George W Bush",
    },
    correctAnswer: "Abraham Lincoln"
},
{
    question: "Fill in the blank: The United States 19th Amendment guarantees ____ the right to vote",
    answers: {
        a: "Women",
        b: "Naturalized Citizens",
        c: "Anyone over the age of 18",
        d: "Citizens of an America Territory",
    },
    correctAnswer: "Women"
},
{
    question: "What year was the first iPhone released?",
    answers: {
        a: "2002",
        b: "2005",
        c: "2007",
        d: "2009",
    },
    correctAnswer: "2007"
},
{
    question: "What Does the Latin Phrase 'Carpe Diem' Stand for",
    answers: {
        a: "I saw, I conquered",
        b: "I think therefore I am",
        c: "In wine there is truth",
        d: "Seize the Day",
    },
    correctAnswer: "Seize the Day"
},
{
    question: "What is the Capitol of India",
    answers: {
        a: "Bombay",
        b: "New Delhi",
        c: "Mumbai",
        d: "Kolkatta",
    },
    correctAnswer: "New Delhi"
},
];

function beginQuiz() {
var readyQuiz = confirm ("Are you ready to play CRAZY HISTORY TRIVIA!!? You will be given 30 seconds to answer 5 questions correctly. Every incorrect answer will take 5 seconds off the clock. Good Luck!")
if (answer){
    startQuestions()
    
}
}

function startQuestions(){
    timeKeeper = setInterval(countdown, 1000)

 }

 
function startClock() {
    timeLeft--;
    timeEl.innerHTML = timeLeft;
if (timeLeft <= 0) {
 endQuiz()
}
}

function endQuiz() {
    clearInterval(
        timeKeeper
    )
}


document.querySelector("#startQuiz").addEventListener("click",beginQuiz)