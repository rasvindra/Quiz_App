// Globally declared variables. some for elements in HTML

var time = 30
var timeLeft = 30
var timeEl = document.getElementById("inSeconds")
var answersSection = document.getElementById("answers")
var scoreArea = document.getElementById("yourScore")
var storedScores = document.getElementById("scoreList")
var answersIndex = 0
var savedScore = ""
var timeKeeper = ""

// Object array that holds questions and answers and correct answers
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

// functions that start the quiz, start the countdown, load questions, check answers, and end the game with option to display results
function beginQuiz() {
var readyQuiz = confirm ("Are you ready to play CRAZY HISTORY TRIVIA!!? You will be given 30 seconds to answer 5 questions correctly. Every incorrect answer will take 5 seconds off the clock. Good Luck!")
if (readyQuiz){
    startQuestions() 
    }
}

function startQuestions(){
    answersSection.classList.remove("hidden")
    timeKeeper = setInterval(startClock, 1000)
    loadQuestion()
}

function loadQuestion(){
    var question = allQuestions[answersIndex]
    document.getElementById("answerSection").innerHTML=question.question
    var ans1 = document.getElementById("answer1");
    ans1.innerHTML=question.answers.a;
    ans1.addEventListener('click', checkAnswer);
  
    var ans2 = document.getElementById("answer2");
    ans2.innerHTML=question.answers.b;
    ans2.addEventListener('click', checkAnswer);
  
    var ans3 = document.getElementById("answer3");
    ans3.innerHTML=question.answers.c;
    ans3.addEventListener('click', checkAnswer);

    var ans4 = document.getElementById("answer4");
    ans4.innerHTML=question.answers.d;
    ans4.addEventListener('click', checkAnswer);
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

    var saveAnswer = confirm("Quiz Completed! Your Score is " + timeLeft + ". Would you like to post Your Score?")
    if(saveAnswer) {
        enterName();

        function enterName() {
            let person = prompt("Please enter your name to save your score below:", "Enter Name");

            if (person !=null && person !=="Enter Name" && person.length>0) {
                savedScore = person + " " + timeLeft;
                scoreArea.innerHTML=savedScore;
                answersSection.classList.add("hidden");
                localStorage.setItem(person, JSON.stringify(timeLeft))
            }
            
            else {
                alert("No Name Entered");
                window.location.reload(); 

            }
        } 
    }
    else {
        window.location.reload()
    }
}

function checkAnswer(){
    if  (this.innerText === allQuestions[answersIndex].correctAnswer){
     console.log("Good Job!")
    }
    else {
     console.log("Wrong Answer! You will be deducted 5 seconds from the clock!")
     timeLeft -=5;
     if (timeLeft < 0){
       timeLeft = 0
     }
     timeEl.innerHTML = timeLeft;
    }
    answersIndex++

    if (answersIndex === allQuestions.length){
        endQuiz()
         }
        else
        {
          loadQuestion()
        }
}

function getScores() {
    for (var i = 0; i < localStorage.length; i++) {
        // set iteration key name
        var key = localStorage.key(i);
        // use key name to retrieve the corresponding value
        var value = JSON.parse(localStorage.getItem(key));
        // console.log the iteration key and value
        console.log('Key: ' + key + ', Value: ' + value);

        var newLi = document.createElement("li");
        var newScore = document.createTextNode(key+ " "+value);
        newLi.appendChild(newScore);
        storedScores.appendChild(newLi);

        // Need to figure out how to place key and associated values into each Li
        // document.querySelector("score1").innerHTML = key+value;


    }
}
getScores()



// query selector listening for button click on HTML to start quiz
document.querySelector("#startQuiz").addEventListener("click",beginQuiz)