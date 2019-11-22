var jsQuiz = document.querySelector("#jsQuiz");
var htmlQuiz = document.querySelector("#htmlQuiz");
var cssQuiz = document.querySelector("#cssQuiz");
var startButton = document.querySelector("#startQuiz");
var jsScore = document.querySelector("#jsScore");
var htmlScore = document.querySelector("#htmlScore");
var cssScore = document.querySelector("#cssScore");
var placeHolder = document.querySelector(".placeHolder");
var quiz = document.querySelector(".quizContent");
var timer = document.querySelector(".timer");
var timeRemaining = document.querySelector(".timeRemaining");
var userChoice = document.querySelector(".choices");
var scoreList = document.querySelector(".scoreList");

var y=0; //variable to keep track of which question is shown
var z=0; //Decides which quiz to display
var highScoreArray=[[],[],[]]; //Array to keep track of high scores

function highScoreDisplay() { //printing the local storage to the highscore page/the users highscore that has just completed the game
    if(JSON.parse(localStorage.getItem("Highscore"))!==null){

        highScoreArray = JSON.parse(localStorage.getItem("Highscore"));

        if(document.body.classList.contains("highscore-page")) { //Checks if it is on the highscore page

            var quizTypes = document.querySelector(".quizType");
            quizTypes.textContent = quizType[z];

                for (i=0; i < highScoreArray[z].length; i++){
                    var li = document.createElement("li");
                    li.textContent = highScoreArray[z][i].initials + " " + highScoreArray[z][i].score; //fix up later (add extra words for display purpose)
                    scoreList.appendChild(li); 
                }
        }
    }
}

highScoreDisplay();
console.log(highScoreArray);

if(document.body.classList.contains("index-page")){ //Checks if it is on the index page

    function quizTimer(){
        x = questions[z].length*15;
        timeRemaining.innerHTML = x;
        timing = setInterval(function(){
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
        var questionsContent = questions[z][y].choices;
        title.textContent = questions[z][y].title;

        for (i=0; i<questions[z][y].choices.length; i++){
            var li = document.createElement("li");
            li.textContent = questionsContent[i];
            li.setAttribute("id", i);
            quizContent.appendChild(li);   
        }
    }

    function clearContent() { //function to clear quizContent after an answer is selected
        userChoice.innerHTML = " ";
    }

    function highScore(){
        if(x>0) { //if incorrect answer on last questions leads to a negative time
            initials = prompt("What are your initials?");
            placeHolder.textContent = "Congrats " + initials + " on finishing the quiz! You're score was " + x + ". Click the button to start the quiz again and see if you can better your score or select home in the navigation bar to go back and try another quiz!";
            placeHolder.style.display = "block";

            highScoreArray[z].push({"initials":initials, "score":x}); // Push the new score and initials to the corresponding array

            console.log(highScoreArray);
            console.log(highScoreArray[z]);

            localStorage.setItem("Highscore", JSON.stringify(highScoreArray)); //Stringify the highscore array and saves to local storage

            
            highScoreDisplay(); //Prints to highscore list

            //resets the quiz so you can start again
            startButton.textContent = "Start the quiz again?";
            startButton.style.display = "block";
            y=0; // reset question array counter
            
        }
        else {
            alert("You have run out of time, please try again!");
            startButton.style.display = "block";
            y=0; // reset question array counter
        }
    }

    userChoice.addEventListener("click", function(event){
        
        var userPickId = event.target.id;
        var userPick = questions[z][y].choices[userPickId];

        console.log(userPick);
        console.log(questions[z][y].answer);
        console.log(questions[z].length);

        if (userPick === questions[z][y].answer) {
            alert("You've picked correctly!");
        }
        else {
            alert("That is incorrect!")
            x = x - 15;
        }

        if(y==questions[z].length-1) { //cancels the next question from being produced if it is at the end of the array
            alert("You've completed the quiz!");
            clearContent();
            quiz.style.display = "none";
            timer.style.display = "none";
            clearInterval(timing);
            highScore();
        }

        else {
        y=y+1;
        console.log(y);
        clearContent();
        choicesArray();
        }
    })

    startButton.addEventListener("click", function startQuiz() { //Starts the quiz and timer
        quiz.style.display = "block";
        placeHolder.style.display = "none";
        startButton.style.display = "none";
        timer.style.display = "block";
        quizTimer();
        choicesArray();
    })

    //Eventlisteners for quiz selection buttons, sets z index to related questions array/highscore array
    jsQuiz.addEventListener("click", function setJsQuiz() {
        z = 0;
        startButton.style.display = "block";
        clearQuizButtons();
    })

    htmlQuiz.addEventListener("click", function setHtmlQuiz() {
        z = 1;
        startButton.style.display = "block";
        clearQuizButtons();
    })

    cssQuiz.addEventListener("click", function setCssQuiz() {
        z = 2;
        startButton.style.display = "block";
        clearQuizButtons();
    })

    function clearQuizButtons() {
        jsQuiz.style.display = "none";
        htmlQuiz.style.display = "none";
        cssQuiz.style.display = "none";
        document.querySelector(".placeHolder").style.display = "block";
        document.querySelector(".placeHolder").textContent = placeHolders[z];
    }
}

if(document.body.classList.contains("highscore-page")) {
    jsScore.addEventListener("click", function setJsQuiz() { //displays the choosen scores on the highscore list
        z = 0;
        scoreList.innerHTML = " ";
        highScoreDisplay();
    })

    htmlScore.addEventListener("click", function setHtmlQuiz() {
        z = 1;
        scoreList.innerHTML = " ";
        highScoreDisplay();
    })

    cssScore.addEventListener("click", function setCssQuiz() {
        z = 2;
        scoreList.innerHTML = " ";
        highScoreDisplay();
    })   
}