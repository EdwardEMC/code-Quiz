var startButton = document.querySelector("#startQuiz");
var placeHolder = document.querySelector(".placeHolder");
var quiz = document.querySelector(".quizContent");
var timer = document.querySelector(".timer");
var timeRemaining = document.querySelector(".timeRemaining");
var userChoice = document.querySelector(".choices");
var scoreList = document.querySelector(".scoreList");

var y=0; //variable to keep track of which question is shown
var z=0; //Decides which quiz to display
var jsHighScoreArray; //Array to keep track of high scores

function highScoreDisplay() { //printing the local storage to the highscore page/the users highscore that has just completed the game
    if(JSON.parse(localStorage.getItem("Highscore"))!==null){
        jsHighScoreArray = JSON.parse(localStorage.getItem("Highscore"));

            if(document.body.classList.contains("highscore-page")) { //Checks if it is on the highscore page, if so runs the function, if not remains unused
                for (i=0; i < jsHighScoreArray.length; i++){
                    var li = document.createElement("li");
                    li.textContent = jsHighScoreArray[i].initials + " " + jsHighScoreArray[i].score; //fix up later (add extra words for display purpose)
                    scoreList.appendChild(li); 
                }
            }
    }
    else {
        jsHighScoreArray = []; //array to track highscores
    }
}

highScoreDisplay();

if(document.body.classList.contains("index-page")){ //Checks if it is on the index page

    function quizTimer(){
        x = questions.length*15;
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

    function highScore(){
        if(x>0) { //if incorrect answer on last questions leads to a negative time
            initials = prompt("What are your initials?");
            placeHolder.textContent = "Congrats " + initials + " on finishing the quiz! You're score was " + x + ".";
            placeHolder.style.display = "block";

            jsHighScoreArray.push({"initials":initials, "score":x});
            console.log(jsHighScoreArray);

            localStorage.setItem("Highscore", JSON.stringify(jsHighScoreArray)); //saves to local storage (working!)

            
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
        var userPick = questions[y].choices[userPickId];

        console.log(userPick);
        console.log(questions[y].answer);
        console.log(questions.length);

        if (userPick === questions[y].answer) {
            alert("You've picked correctly!");
        }
        else {
            alert("That is incorrect!")
            x = x - 15;
        }

        if(y==questions.length-1) { //cancels the next question from being produced if it is at the end of the array
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

    startButton.addEventListener("click", function startQuiz() {
        quiz.style.display = "block";
        placeHolder.style.display = "none";
        startButton.style.display = "none";
        timer.style.display = "block";
        quizTimer();
        choicesArray();
    })

}