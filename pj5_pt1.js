/*
* Assign to consts div elements
*/
const alertMsg = document.getElementById("alert");
const alertMsg2 = document.getElementById("browserAlert");
const alertMsg3 = document.getElementById("ageAlert");
const alertMsg4 = document.getElementById("movieAlert");
const confMsg = document.getElementById("confirmation");

// executes the validatInput function on click
document.getElementById("submit").onclick = function () {
    validateInput();
}

/*
* This function calls individual validators & only proceeds when it receives true froma ll
*/
function validateInput(){
    const nameValidateReturned = nameValidate(); // validates name
    const checkRadioReturned = checkRadio(); // validates checkRadio (one must be selected)
    const checkCheckboxReturned = checkCheckbox(); // validates checkRadio (one must be selected)
    const dropDownVerifyReturned = dropDownVerify(); // validates checkRadio (one must be selected)

    // if all return true, it proceeds
    if (nameValidateReturned && checkRadioReturned && checkCheckboxReturned && dropDownVerifyReturned) {
        // clears any prior alert message
        alertMsg.textContent = ""
        alertMsg2.textContent = ""
        alertMsg3.textContent = ""
        alertMsg4.textContent = ""
        
        // displays confirmation notification
        textContent = "Thanks, your data was submitted!"
        confMsg.textContent = textContent;}
    }

/*
* This function validates user name
*/    
function nameValidate(){
    // assigns const to userName
    const userName = document.getElementById("userName").value;

    // regex to check if full name is inserted by checking for space (between first & last name)
    const regexWhiteSpace = /\s/;
    const resultregexWhiteSpace= regexWhiteSpace.test(userName);

    // regex to check if name field has a number
    const regexNum = /[0-9]/;
    const resultRegexNum = regexNum.test(userName);

    // regex to check if name has a symbol
    // removes space(s) because that's an essential part of full name
    const regexSymb = /\W/;
    const userNameUpdated = userName.replaceAll(" ", "")
    const resultRegexSymb= regexSymb.test(userNameUpdated);

        // checks if name field is blank
    if (userName == "") {
        // clears any prior confirmation message
        confMsg.textContent = ""
        // displays error
        textContent = "Name: No name entered. Please try again."
        alertMsg.textContent = textContent;
        return
        // checks if name field has numbers
    } else if (resultRegexNum) {
        // clears any prior confirmation message
        confMsg.textContent = ""
        // displays error
        textContent = "Name: Number entered. Please try again."
        alertMsg.textContent = textContent;
        return
        // checks both first and last name are typed by looking for space between texts
    } else if (!resultregexWhiteSpace) {
        // clears any prior confirmation message
        confMsg.textContent = ""
        // displays error
        textContent = "Name: Please enter full name. Please try again."
        alertMsg.textContent = textContent;
        return
        // checks if name field has symbols
        // if symbol is space, it ignores it with "!"
    } else if (resultRegexSymb) {
        // clears any prior confirmation message
        confMsg.textContent = ""
        // displays error
        textContent = "Name: Special chars entered. Please try again."
        alertMsg.textContent = textContent;
        return
        // once all validation checks clear, returns true
    } else {
        // clears alert message
        alertMsg.textContent  = ""
        return true
    }
}

/*
* This function checks whether a radio item has been selected
*/  
function checkRadio() {
    const text = "Age group: "
    const getSelectedValue = document.querySelector( 'input[name="ageGroup"]:checked');
    
    // ensures at least one item is selected
    if(getSelectedValue != null) {
        // clears error message
        alertMsg3.textContent = ""
      return true
    } else {
        // displays error
        alertMsg3.textContent = text + "No radios have been selected.";
        return
    };
}

/*
* This function checks whether a checkbox item has been selected
*/  
function checkCheckbox() {
    const text = "Browsers: "
    const getSelectedValue = document.querySelector( 'input[name="browsers"]:checked');

    // ensures at least one item is selected
    if(getSelectedValue != null) {
        // clears error message
        alertMsg2.textContent = ""
      return true
    } else {
        // displays error
        alertMsg2.textContent = text + "No boxes have been checked";
        return
    };
}

/*
* This function checks whether a dropdown menu has been selected
*/  
function dropDownVerify() {
    const selectedVal = document.getElementById("movieType");
    const selectedValIndex = selectedVal.selectedIndex; // index

    const text = "MovieType: "

    // displays when unique value is selected & not defaulty Index==0
    if (selectedValIndex != 0) {
        alertMsg4.textContent = ""
        return true
    } else {
        // displays error
        alertMsg4.textContent = text + "No drop down has been checked";
        return
    }
  }

/*
* This function resets page when "reset" button is clicked
*/
document.getElementById("reset").onclick = function () {
    document.forms["myform"].elements["userName"].value = ""
    alertMsg.textContent = ""
    alertMsg2.textContent = ""
    alertMsg3.textContent = ""
    alertMsg4.textContent = ""
    confMsg.textContent = ""
}




