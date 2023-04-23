/*
* Assign to consts to div elements
*/
const alertMsg = document.getElementById("alert");
const resultMsg = document.getElementById("result");

// sets attribute of resultMsg to allow \n new line with concatenation
resultMsg.setAttribute('style', 'white-space: pre;');

// executes the validatInput function on click
document.getElementById("submit").onclick = function () {
    validateInput();
}

/**
 * This method validates input by checking there is a decimal point, among others, then calls executeRounding
 */
 function validateInput() {
    // clears any prior alert messages (happens if user clicks Submit multiple times)
    alertMsg.textContent = ""
    resultMsg.textContent = ""

    // gets input value from user
    userInput = document.getElementById("userInput").value;

    // assigns number of decimal places by splitting userInput at period then checking length of array at 1
    if (userInput.includes(".")) {
        var decimalPlaces = userInput.toString().split(".")[1].length;
        console.log(decimalPlaces)
    } else {
        // if no demial point is found
        alertMsg.textContent = "You need to type a number with at least 4 decimals, please try again."
        return
    }

    // checks for NaN
    if (Number.isNaN(parseFloat(userInput))) {
        alertMsg.textContent = "Not all values are numbers. Please try again."
        return
    // checks there are at least 4 decimal places
    } else if (decimalPlaces < 4) {
        alertMsg.textContent = "You need to type a number with at least 4 decimals, please try again."
        return
    // once it clears valiations, it executes executeRounding
    } else {
        alertMsg.textContent = "" // removes any prior alerts
        executeRounding(userInput); // calls executeRounding and passes userInput to it
    }
}

function executeRounding(userInput) {

    userInput = parseFloat(userInput)

    resultMsg.textContent += "You typed number " + userInput // Returns number typed

    var nearestInt = Math.floor(userInput);  // Rounded to the nearest integer
    resultMsg.textContent += "\nRounded to the nearest integer = " + nearestInt

    var SqrtRtoInt = Math.round(Math.sqrt(userInput));  // Square root rounded to integer
    resultMsg.textContent += "\nSquare root rounded to integer = " + SqrtRtoInt

    var r10 = userInput.toFixed(1);  // Rounds to nearest 10th
    resultMsg.textContent += "\nRounded to the nearest 10th position = " + r10

    var r100 = userInput.toFixed(2);  // Rounds to nearest 100ths
    resultMsg.textContent += "\nRounded to the nearest 100th position = " + r100

    var r1000 = userInput.toFixed(3);  // Rounds to nearest 1000ths
    resultMsg.textContent += "\nRounded to the nearest 1000th position = " + r1000
}
 
/*
* This function resets page when "reset" button is clicked
*/
document.getElementById("reset").onclick = function () {
    document.forms["myform"].elements["userInput"].value = ""
    alertMsg.textContent = ""
    resultMsg.textContent = ""
}




