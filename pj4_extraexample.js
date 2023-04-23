/*
* Assign to consts div elements
*/
const myDiv = document.getElementById("myDIV");
const otherDiv = document.getElementById("otherDiv");
const alertMsg = document.getElementById("alert");


// executes the evaluate function on click
document.getElementById("execute").onclick = function () {
    evaluate();
}

/*
* This function assigns form input to variables and passis them to validateInput.
*/
function evaluate() {
    // grabs quanity from quanity element
    var quantity = document.forms["myform"].elements["quanity"].value
    quantity = parseInt(quantity)

    // clears slate when new number is input
    alertMsg.textContent = "";
    otherDiv.textContent = "";
    myDiv.textContent = "";

    validateInput(quantity);
}

/*
* This function validates user input by checking for isNaN and if <2 or >10.
* If error is found, it displays an error.
*/
function validateInput(quantity){
    // checks for NaN
    if (Number.isNaN(quantity)) {
        // displays error
        textContent = "Not all values are numbers. Please try again."
        alertMsg.textContent = textContent;
        // stops further execution upon error
        return

    } else if (quantity < 2 ) {
        // displays error
        textContent = "Number < 2. Please try again."
        alertMsg.textContent = textContent;
        // stops further execution upon error
        return

    } else if (quantity > 10) {
        // displays error
        textContent = "Number > 10. Please try again."
        alertMsg.textContent = textContent;
        // stops further execution upon error
        return
    }
    else {
        v1Execute(quantity)
        v2Execute(quantity)
    }
}

/*
* This function displays version1 of making asterisk table.
*/
function v1Execute(quantity) {

    // set myDiv attribe to accept \n in +=, which it otherwise ignores
    otherDiv.setAttribute('style', 'white-space: pre;');

    otherDiv.textContent =  "\nv1: using textContent +=\n\n"

    // appends to otherDiv
    otherDiv.textContent +=  "*".repeat(quantity)
    const middle = "\n*" + " ".repeat(quantity-2) + "*"
    for (rows = 1; rows <= quantity-2; rows++) {
        otherDiv.textContent += middle
        console.log("test")
    };
    otherDiv.textContent += "\n" + "*".repeat(quantity)
}

/*
* This function displays version2 of making asterisk table.
*/
function v2Execute(num) {
    // set myDiv attribe to accept \n in +=, which it otherwise ignores
    myDiv.setAttribute('style', 'white-space: pre;');

    // create middle row
    const middle = "\n*" + " ".repeat(num-2) + "*"

    myDiv.textContent =  "\nv2: using template literals\n"

// append to myDiv using template literals -- alignment is important as it captures directly
myDiv.textContent += `
${"*".repeat(num) + middle.repeat(num-2)}
${"*".repeat(num)}
`
}

// resets stage when "reset" button is clicked
document.getElementById("reset").onclick = function () {
    document.forms["myform"].elements["quanity"].value = ""
    otherDiv.textContent = "";
    myDiv.textContent = "";
    alertMsg.textContent = "";
}
