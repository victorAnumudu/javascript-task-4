
// declarations of Global variables
var recordText = document.getElementById("record-text");
var questionCon = document.getElementById("question-con");
var questionNumber = document.getElementById("question-number");
var nextButton = document.getElementById("next");
var myScore = [];
var myResult = 0;

var questionBank = [
    ["What is the arithmetic mean of the following numbers: 10, 20, 50, 40?", "20", "40", "30", "50", "None of the above"],
    ["How many colors does Nigerian flag have?", "1", "2", "3", "4", "None of the above"],
    ["What is the sum of the 30<sup>th</sup> term in the series: 1, 3, 5, 7, ...?", "59", "-59", "69", "-69", "None of the above"],
    ["What is the missing number? <img src='images/image1.jpg' alt='no image' class='image'>", "72", "22", "4", "2", "None of the above"],
    ["Given console.log('2' + 1), What will be logged to the console?", "3", "Undefined", "Error", "21", "None of the above"]
]
var myAnswers = ["c", "b", "a", "d", "d"];

var myQuestion = document.getElementById("question");
var paraOption = document.getElementsByClassName("option")
var optionSelected = document.getElementsByClassName("options");
var myOption = document.getElementsByClassName("option-value");

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

recordText.innerHTML = "You have not started yet!";
questionCon.style.display = "none";



// function that records total number of question answered
function questionCounter(){
    myCounter++;
    return myCounter;
}
//(END of function that records total number of question answered


//Function that makes all the paraOption to have no background
function backgroundReset(){
    for(var i of paraOption){
        i.style.backgroundColor = "";
        i.style.color = "black";
    }
}
//END of Function that makes all the paraOption to have no background

//Function that deactivates/activates other options once a user selects an option
function deactivateOption(){
    for(var i of optionSelected){
        i.setAttribute("disabled", "disabled");
    }
}

function activateOption(){
    for(var i of optionSelected){
        i.removeAttribute("disabled", "disabled");
    }
}
//END of Function that deactivates/activates other options once a user selects an option



// function that determines correct or wrong answer
function correctAnswer(c){
        
        if(c.value == myAnswers[myCounter]){
            backgroundReset();
            deactivateOption();
            c.parentElement.style.backgroundColor = "green";
            c.parentElement.style.color = "white";
            myScore.push(1);
        } else{
            backgroundReset();
            deactivateOption();
            

            for(var i of paraOption){
                if(myCounter == 0){
                    paraOption[2].style.backgroundColor = "green";
                    paraOption[2].style.color = "white";
                } else if(myCounter == 1){
                    paraOption[1].style.backgroundColor = "green";
                    paraOption[1].style.color = "white";
                } else if(myCounter == 2){
                    paraOption[0].style.backgroundColor = "green";
                    paraOption[0].style.color = "white";
                } else if(myCounter == 3){
                    paraOption[3].style.backgroundColor = "green";
                    paraOption[3].style.color = "white";
                } else if(myCounter == 4){
                    paraOption[3].style.backgroundColor = "green";
                    paraOption[3].style.color = "white";
                }
            }


            c.parentElement.style.backgroundColor = "red";
            c.parentElement.style.color = "white";
            myScore.push(0);
        }

    console.log(myScore);
}


//END of function that determines correct or wrong answer


// Function that calculates the score
function calResult(){
    for(var i in myScore){
        myResult += myScore[i];
    }
    return myResult;
}
// END of Function that calculates the score





// function for nexting question
function nextQuestion(){
    nextButton.innerHTML = "Next";
   

    // CALLS the Function that makes all the paraOption to have no background
    backgroundReset()
    //END of Function that makes all the paraOption to have no background

    activateOption()

    // calls the function that records total number of question answered
    questionCounter();
    // END of function that records total number of question answered

    if(myCounter <= 4){

        recordText.innerHTML = "You have answered " + questionWord[myCounter] + " " + (myCounter) + " question(s) out of five(5) questions";
        questionCon.style.display = "block";
        questionNumber.innerHTML = "Question " + (myCounter + 1);
        myQuestion.innerHTML = questionBank[myCounter][0];

        // options
        for(var i = 0; i <= myOption.length-1; i++){
            myOption[i].innerHTML = questionBank[myCounter][i + 1];
        }
        // END of option-value

    } else if(myCounter == 5){
        recordText.innerHTML = "You have answered " + questionWord[myCounter] + " " + (myCounter) + " question(s) out of five(5) questons";
        questionCon.style.display = "none";
        nextButton.innerHTML = "Check Result";
    } else{
        console.log(myResult);
        nextButton.innerHTML = "Test Completed";
        nextButton.style.backgroundColor = "red";
        nextButton.setAttribute("disabled", "disabled");
        recordText.innerHTML = "Your score is .... " + calResult() + " / " + (myCounter-1);
    }
}
//END of function for nexting question






