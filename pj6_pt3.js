/*
* Assign to consts to div elements
*/
const alertMsg = document.getElementById("alert");
const resultMsg = document.getElementById("result");
const areaCode = document.getElementById("areaCode");
const threeDigits = document.getElementById("threeDigits");
const fourDigits = document.getElementById("fourDigits");


// creates div variable and sets attributes to allow \n new line with concatenation
resultMsg.setAttribute('style', 'white-space: pre;');

// executes the validatInput function on click
document.getElementById("submit").onclick = function () {
    extractNums();
}

/**
 * This method gets userInput and chesks for NaN. 
 * If not Number.isNaN, it then calls on evaluateAnswer() function to verify the correctAnswer.
 */
 function extractNums() {
    // clears any prior alert messages (happens if user clicks Submit multiple times)
    alertMsg.textContent = ""
    resultMsg.textContent = ""

    // gets input value from user
    userInputPhone = document.getElementById("userInputPhone").value;

    // regex to get phone number in (xxx) xxx-xxxx format
    phoneRegExp = /^(\()(\d{3})(\))(\s)(\d{3})(-\d{4})$/;

    // checks if userInputPhone is blank
    if (userInputPhone == "" ) {
        alertMsg.textContent = "Nothing enetered. Please phone number in the following format: (xxx) xxx-xxxx. Each x must be a number.";
    // tests if userInputPhone matches regEx
    } else if (!phoneRegExp.test(userInputPhone)) {
        alertMsg.textContent = "Incorrect format. Please in the following format: (xxx) xxx-xxxx. Each x must be a number.";
    // if userInputPhone is not blank and matches regEx, confirms
    } else {
        alertMsg.textContent = "" // removes any prior alert
        resultMsg.textContent = "Thank you. This is a valid number.";
    }

    // matches userInputPhone to regEx
    var parts = userInputPhone.match(phoneRegExp)

    // assigns phone parts to variables
    areaCode.value = parts[2]
    threeDigits.value = parts[5]
    fourDigits.value = parts[6].split("-")[1]
}

/*
* This function resets page when "reset" button is clicked
*/
document.getElementById("reset").onclick = function () {
    alertMsg.textContent = ""
    resultMsg.textContent = ""
}




