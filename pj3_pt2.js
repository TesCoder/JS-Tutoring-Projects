document.getElementById("process").onclick = function () {
    evaluate()
};

/*
* This function assigns form input to variables and passis them to validateInput.
*/
function evaluate() {
    var qtySold

    // pasrseInt input number
    var number1 = parseInt(document.forms["myform1"].elements["itemQtySold1"].value);
    var number2 = parseInt(document.forms["myform1"].elements["itemQtySold2"].value);
    var number3 = parseInt(document.forms["myform1"].elements["itemQtySold3"].value);
    var number4 = parseInt(document.forms["myform1"].elements["itemQtySold4"].value);

    validateInput(number1, number2, number3, number4);
}

/*
* This function validates user input by checking for isNaN and negative number.
* If isNaN or negative number are found, it displays an error.
*/
function validateInput(number1, number2, number3, number4) {
    // checks for isNaN
    // If isNaN is found, displays an alert message
    if (Number.isNaN(parseInt(number1)) || Number.isNaN(parseInt(number2)) || Number.isNaN(parseInt(number4)) || Number.isNaN(parseInt(number3))) {
        textContent = "Not all values are numbers. Please try again."
        document.getElementById("alert").textContent = textContent;
        return
    }

    // checks if negative number was input
    // If negative number was input, displays an alert message in HTML
    if (parseInt(number1) < 0 || parseInt(number2) < 0 || parseInt(number3) < 0 || parseInt(number4) < 0) {
        textContent = "Entered a negative number. Please try again."
        document.getElementById("alert").textContent = textContent;
        return
    }

    // resets alert when user enters negative number
    document.getElementById("alert").textContent = "";
    capturePrices()
    displayResult(number1, number2, number3, number4);
}

/*
* This function capturse prices from elements.
*/

function capturePrices() {
    // parseFloat price by getting from price elements
    price1 = parseFloat(document.getElementById("price1").textContent)
    price2 = parseFloat(document.getElementById("price2").textContent)
    price3 = parseFloat(document.getElementById("price3").textContent)
    price4 = parseFloat(document.getElementById("price4").textContent)

    displayResult(price1, price2, price3, price4);
}

/*
* This function displays results
*/
function displayResult(number1, number2, number3, number4) {

    // displays quantity sold in form
    document.forms["myform"].elements["qtsold1"].value = number1;
    document.forms["myform"].elements["qtsold2"].value = number2;
    document.forms["myform"].elements["qtsold3"].value = number3;
    document.forms["myform"].elements["qtsold4"].value = number4;

    // displays total in form by multiplying quanity * price
    document.forms["myform"].elements["total1"].value = number1 * price1;
    document.forms["myform"].elements["total2"].value = number2 * price2;
    document.forms["myform"].elements["total3"].value = number3 * price3;
    document.forms["myform"].elements["total4"].value = number4 * price4;

    // totals quantity sold
    qtySold = number1 + number2 + number3 + number4

    // displays total amount sold
    document.forms["myform"].elements["totalAmtSold"].value = qtySold;

    // calculates total based on # of items sold and their price
    total = number1 * price1 + number2 * price2 + number3 * price3 + number4 * price4

    // calculates 9% of total plus 250
    total = total * .09 + 250

    // displays totalWeeklyEarning
    document.forms["myform"].elements["totalWeeklyEarning"].value = "$" + total.toFixed(2);
}

/**
 * Calls resetFields() when "Clear Form" button is clicked.
 */
document.getElementById("reset").onclick = function () {
    resetFields()
}

/**
 * This function clears all fields and sets the page as new.
 * It is called when user selects resetFields().
 */
function resetFields() {
    document.forms["sellerForm"].elements["sellerNameID"].value = "";

    document.forms["myform"].elements["qtsold1"].value = "";
    document.forms["myform"].elements["qtsold2"].value = "";
    document.forms["myform"].elements["qtsold3"].value = "";
    document.forms["myform"].elements["qtsold4"].value = "";

    document.forms["myform"].elements["total1"].value = "";
    document.forms["myform"].elements["total2"].value = "";
    document.forms["myform"].elements["total3"].value = "";
    document.forms["myform"].elements["total4"].value = "";

    document.forms["myform"].elements["totalAmtSold"].value = "";
    document.forms["myform"].elements["totalWeeklyEarning"].value = "";
}