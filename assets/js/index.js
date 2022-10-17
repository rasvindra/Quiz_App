var time = 30
var timeLeft = 30
var timeEl = document.getElementById("inSeconds")
var answersSection = document.getElementById("answers")
var scoreArea = document.getElementById("yourScore")
var answersIndex = 0
var savedScore = ""
var timeKeeper = ""



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
};

function endQuiz() {
    clearInterval(
        timeKeeper
    )

    confirm("Quiz Completed! Your Score is " + timeLeft + ". Would you like to post Your Score?")
    if(true) {
        enterName();

        function enterName() {
            let person = prompt("Please enter your name to save your score below:", "Enter Name");

            if (person == "" || person == "Enter Name") {
              alert("No Name Entered");
              ;

            }
            
            else if (person="********WHAT EVER VALUE*****") {
            savedScore = person + " " + timeLeft;
            scoreArea.innerHTML=savedScore;
            answersSection.classList.add("hidden");
            }

            else {
                window.location.reload()  
            }
        } 
    }
    // else {
    //     window.location.reload()
    // }
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
};

document.querySelector("#startQuiz").addEventListener("click",beginQuiz)