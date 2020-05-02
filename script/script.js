
// declarations of Global variables
var recordText = document.getElementById("record-text");
var questionCon = document.getElementsByClassName("question-con");
var questionNumber = document.getElementsByClassName("question-number");
var nextButton = document.getElementById("next");
var questionWord = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five"
}

var myCounter = -1;
// END of declarations of Global variables

// hiding the question container
for(var questions of questionCon){
    questions.style.display = "none";
}
// END of hiding the question container

// function that records total number of question answered
function questionCounter(){
    myCounter++;
    // console.log(myCounter);
    return myCounter;
}
//END of function that records total number of question answered


// function that iterates over the question
function nextQuestion(){
    nextButton.innerHTML = "Next";
    questionCounter();
    if(myCounter <= 5){
        recordText.innerHTML = "You have answered " + questionWord[myCounter] + " " + (myCounter) + " question(s) out of five(5) questons";
        for(var questions of questionCon){
            questions.style.display = "none";
        }
        questionCon[myCounter].style.display = "block";
        questionNumber[myCounter].innerHTML = "Question " + (myCounter + 1);
    } else{
        nextButton.innerHTML = "Test Completed";
        nextButton.style.backgroundColor = "red";
        nextButton.setAttribute("disabled", "disabled")
    }
}
//END of function that iterates over the question





