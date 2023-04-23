/*
* Assign to consts div elements
*/
const alertMsg = document.getElementById("alert");
const displayInfo = document.getElementById("displayInfo");

// creates div variable and sets attributes to allow \n new line with concatenation
alertMsg.setAttribute('style', 'white-space: pre;');
displayInfo.setAttribute('style', 'white-space: pre;');

// executes the evaluate function on click
document.getElementById("submit").onclick = function () {
    validateInput();
}

/*
* This function validates user input
*/
function validateInput(){
    // assigns input field to a constant
    const stateInputField = document.forms["myform"].elements["userName"].value.toLowerCase();

    // checks if a number is entered and displays error
    if (Number.isInteger(parseInt(stateInputField))) {
        displayInfo.textContent = ""
        alertMsg.textContent  = "Error: You have entered an invalid input. Please try again.";
    } else {
        // if input is not a number it calls getStateData() to see if it's in the state database
        getStateData(stateInputField) 
    }
}

/*
* Function checks input to see if it's in database
* Displays database values
*/
function getStateData(stateInputField) {

    // array of states and data
    let states = [{stateAbbr: 'AL', stateName: 'Alabama', capital: 'Montgomery', population: '4,903,185'}, 
                {stateAbbr: 'AK', stateName: 'Alaska', capital: 'Juneau', population: '731,545'},
                {stateAbbr: 'AZ', stateName: 'Arizona', capital: 'Phoenix', population: '7,278,717'},
                {stateAbbr: 'AR', stateName: 'Arkansas', capital: 'Little Rock', population: '3,017,825'},
                {stateAbbr: 'CA', stateName: 'California', capital: 'Sacramento', population: '39,512,223'},
                {stateAbbr: 'CO', stateName: 'Colorado', capital: 'Denver', population: '5,758,736'}
                ];
    

    // checks if user has entered abbreviation (length or two) or name of state
    if (stateInputField.length > 2) {
        // creates a stateList using stateName
        var statesList = states.filter(state => state.stateName.toUpperCase() == stateInputField.toUpperCase());
    } else if (stateInputField.length == 2) {
        // creates a stateList using stateName
        var statesList = states.filter(state => state.stateAbbr == stateInputField.toUpperCase());
    } 
    
    // if state is not in database, display error message
    if (statesList == "") {
        // clears past notification
        displayInfo.textContent = "";

        // displays error
        alertMsg.textContent  = "Sorry, we do not have information about this state!\nWe only have information about Alabama, Alaska, Arizona, Arkansas, California, Colorado.";
    }

    statesList.forEach(state =>{
        // clears past alert message
        alertMsg.textContent = "";

        // displays state information
        displayInfo.textContent = ""
        displayInfo.textContent += "State Abbr = " + state.stateAbbr + "\n";
        displayInfo.textContent += "State Name = " + state.stateName + "\n";
        displayInfo.textContent += "Capital = " + state.capital + "\n";
        displayInfo.textContent += "Population = " + state.population + "\n";
    });
}

// resets stage when "reset" button is clicked
document.getElementById("reset").onclick = function () {
    document.forms["myform"].elements["userName"].value = ""; // clears user field
    alertMsg.textContent = ""; // clears alert message
    displayInfo.textContent = ""; // clears 
}