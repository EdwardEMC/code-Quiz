var startButton = document.querySelector("#startQuiz");
var timer = document.querySelector(".timer");
var timeRemaining = document.querySelector(".timeRemaining");
var userChoice = document.querySelector(".choices");

var y=0; //variable to keep track of which question is shown

function quizTimer(){
    x = questions.length*15;
    timeRemaining.innerHTML = x;
    var timing = setInterval(function(){
        x--;
        timeRemaining.innerHTML = x;      
        
        if(x===0){
            clearInterval(timing);
            alert("Time is up, you lose!");
        }
    }, 1000)
}

function choicesArray() {
    var quizContent = document.querySelector(".choices");
    var title = document.querySelector(".title");
    var questionsContent = questions[y].choices;
    title.textContent = questions[y].title;

    for (i=0; i<questions[y].choices.length; i++){
        var li = document.createElement("li");
        li.textContent = questionsContent[i];
        li.setAttribute("id", i);
        quizContent.appendChild(li);   
    }
}

function clearContent() { //function to clear quizContent after an answer is selected
    userChoice.innerHTML = " ";
}

userChoice.addEventListener("click", function(event){
    var userPickId = event.target.id;
    var userPick = questions[y].choices[userPickId];

    console.log(userPick);
    console.log(questions[y].answer);

    if (userPick === questions[y].answer) {
        alert("You've picked correctly!");
    }
    else {
        alert("That is incorrect!")
        //add in the negative time response from incorrect answer
    }

    y=y+1;
    console.log(y);
    clearContent();
    choicesArray();
})

startButton.addEventListener("click", function startQuiz() {
    document.querySelector(".quizContent").style.display = "block";
    document.querySelector(".placeHolder").style.display = "none";
    document.querySelector("#startQuiz").style.display = "none";
    timer.style.display = "block";
    quizTimer();
    choicesArray();
})