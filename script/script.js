
// declarations of Global variables
var recordText = document.getElementById("record-text");
var questionCon = document.getElementById("question-con"); //this
var questionNumber = document.getElementById("question-number"); //this
var nextButton = document.getElementById("next");

var questionBank = [
    ["What is the arithmetic mean of the following numbers: 10, 20, 50, 40?", "20", "30", "40", "50", "None of the above"],
    ["How many colors does Nigeria flag has?", "1", "2", "3", "4", "None of the above"],
    ["What is the sum of the 30<sup>th</sup> term in the series: 1, 3, 5, 7, ...?", "59", "-59", "69", "-69", "None of the above"],
    ["What is the missing number? <img src='images/image1.jpg' alt='no image' class='image'>", "72", "22", "4", "2", "None of the above"],
    ["Given console.log('2' + 1), What will be logged to the console?", "3", "Undefined", "Error", "21", "None of the above"],
    ["What is the missing number?", "72", "22", "4", "2", "None of the above"],
    ["What is", "72", "22", "4", "2", "None of the above"],
]

var myQuestion = document.getElementById("question"); //this
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
    // console.log(myCounter);
    return myCounter;
}
//END of function that records total number of question answered


// function for nexting question
function nextQuestion(){
    nextButton.innerHTML = "Next";

    // calls the function that records total number of question answered
    questionCounter();
    // END of function that records total number of question answered

    if(myCounter <= 4){
        recordText.innerHTML = "You have answered " + questionWord[myCounter] + " " + (myCounter) + " question(s) out of five(5) questons";
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
        nextButton.innerHTML = "Test Completed";
        nextButton.style.backgroundColor = "red";
        nextButton.setAttribute("disabled", "disabled")
        recordText.innerHTML = "Your score is .... ";
    }
}
//END of function for nexting question






