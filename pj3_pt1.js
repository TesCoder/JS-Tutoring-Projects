
document.getElementById('process').onclick = function () {
    process();
};

/*
* This function collects form from data.
*/
function process() {
    // create variables
    var number1, number2, number3, number4, hwAvg, midExam, finalExam, participation, finalGrade

    // gets numbers from form
    number1 = document.forms["myform"].elements["num1"].value;
    number1 = FindElementByXPath("//td[@id='num1']//input");
    number2 = document.forms["myform"].elements["num2"].value;
    number3 = document.forms["myform"].elements["num3"].value;
    number4 = document.forms["myform"].elements["num4"].value;

    validateData(number1, number2, number3, number4);
}

function validateData(number1, number2, number3, number4) {
    // checks for NaN
    if (Number.isNaN(parseInt(number1)) || Number.isNaN(parseInt(number2)) || Number.isNaN(parseInt(number3)) || Number.isNaN(parseInt(number4))) {
        alert("here2a")
        textContent = "Not all values are numbers. Please try again."
        document.getElementById("alert").textContent = textContent;
        document.getElementById("result").textContent = "";
        return
    }

    // checks if greater than 100
    if (parseInt(number1) > 100 || parseInt(number2) > 100 || parseInt(number3) > 100 || parseInt(number4) > 100) {
        textContent = "A value exceeds 100. Please try again."
        document.getElementById("alert").textContent = textContent;
        document.getElementById("result").textContent = "";
        return
    }
    calculateFinalAvg(number1, number2, number3, number4)
}

function calculateFinalAvg(number1, number2, number3, number4) {
    // clears alert message
    // addresses issue where alert text may persist if user entered correct value after entering wrong value
    document.getElementById("alert").textContent = ""

    // parseInt numbers and assigns them to a variable
    hwAvg = parseInt(number1);
    midExam = parseInt(number2);
    finalExam = parseInt(number3);
    participation = parseInt(number4);

    // calculates the final average
    var finalAverage = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * participation)
    finalAverage = finalAverage.toFixed(0);

    determineGrade(finalAverage);
}

/*
* This function determines grade using the finalAverage. 
*/
function determineGrade(finalAverage) {
    // switch statement to determine grade
    switch (true) {
        case (finalAverage >= 90 && finalAverage <= 100):
            finalAverage = "The final average is: " + finalAverage;
            finalGrade = ". The final grade is A."
            break;
        case (finalAverage >= 80 && finalAverage <= 89):
            finalAverage = "The final average is: " + finalAverage;
            finalGrade = ". The final grade is B."
            break;
        case (finalAverage >= 70 && finalAverage <= 79):
            finalAverage = "The final average is: " + finalAverage;
            finalGrade = ". The final grade is C."
            break;
        case (finalAverage >= 60 && finalAverage <= 69):
            finalAverage = "The final average is: " + finalAverage;
            finalGrade = ". The final grade is D. Student must retake the course."
            break;
        case (finalAverage <= 59):
            finalAverage = "The final average is: " + finalAverage;
            finalGrade = ". The final grade is F. Student must retake the course."
            break;
    }
    displayFinalScore(finalAverage, finalGrade);
}

/*
* This function displays final score based on finalAverage and  finalGrade.
*/
function displayFinalScore(finalAverage, finalGrade) {
    // displays textContent based on switch statement 
    document.getElementById("result").textContent = finalAverage + finalGrade;
}

document.getElementById('reset').onclick = function () {
    document.getElementById("result").textContent = "";
    document.getElementById("alert").textContent = "";
};