/*
* Assign to consts to div elements
*/
const alertMsg = document.getElementById("alert");
const resultMsg = document.getElementById("result");

// sets resultMsg attribute to allow \n new line with concatenation
resultMsg.setAttribute('style', 'white-space: pre;');

// executes the validatInput function on click
document.getElementById("submit").onclick = function () {
    findChar();
}

/*
* This method validates input for blanks and checks if character is in content
*/
 function findChar() {
    // clears any prior alert messages (happens if user clicks Submit multiple times)
    alertMsg.textContent = ""
    resultMsg.textContent = ""

    // gets input value from user
    userInputContent = document.getElementById("userInputContent").value;
    userInputChar = document.getElementById("userInputChar").value;

    // checks if userInputContent is blank
    if (userInputContent == "" ) {
        alertMsg.textContent = "You have not entered any content to search. Please enter something."
        return
    // checks if userInputContent is blank
    } else if (userInputChar == "" ) {
        alertMsg.textContent = "You have not entered any char to search. Please enter something."
        return
    } 
    
    // checks userInputContent includes userInputChar
    if (userInputContent.includes(userInputChar.toLowerCase())) {
        var charOccurence = userInputContent.split(userInputChar.toLowerCase()).length-1; // creates an array with item at each occurence of split
        alertMsg.textContent = "\"" + userInputChar + "\" occurs in entered content " + charOccurence + " times." // length of array-1 is occurence of char
    // when userInputChar is not found in userInputContent, it opens new window to display error
    } else {
        errorWindow(userInputChar);
        return
    }
}

/*
* This method displays error window
*/
function errorWindow(userInputChar){

    // assemble HTML to push into new window:
    var myText = "<html>\n";
    myText += "<head>\n";
    myText += "<title>Popup Window</title>\n";
    myText += "</head>\n";
    myText += "<body>\n";
    myText += "<div style='margin:0 auto;'>\n";
    myText += "<p><strong>Search character \"" + userInputChar + "\" not found in the content you typed!</strong></p>\n";
    myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
    myText += "</div>\n";
    myText += "</body>\n";
    myText += "</html>";

    // open window on the upperleft of the screen
    var newWindow = window.open("", "new_window",
    "top=1,left=1,width=300,height=100");

    // have browser focus on window
    newWindow.focus();

    // push html into to this new opened window
    newWindow.document.write(myText);

    // tell browser that newWindow document is finished loading
    newWindow.document.close();
    }
 
/*
* This function resets page when "reset" button is clicked
*/
document.getElementById("reset").onclick = function () {
    userInputContent = ""
    userInputChar = ""
    alertMsg.textContent = ""
    resultMsg.textContent = ""
}




