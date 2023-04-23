
/**
 * Creates var correctAnswer as 0
 */
var correctAnswer = 0

/**
 * Calls NewRound() on window.onload
 */
window.onload = NewRound()

/**
 * This method clears all fields and sets the page as new.
 * Activated on window.onload or when the "reload" button is clicked.
 * This is added as an extra feature.
 */
function NewRound() {
    // Displays the game
    document.getElementById('myform').style.display = 'block';

    // creates X and Y variables
    var X, Y
    X = Math.floor(Math.random() * 10);
    Y = Math.floor(Math.random() * 10);

    // Displays prompt "How much is X times Y? at the specific points in the HTML."
    document.getElementById("X").textContent = "How much is " + X;
    document.getElementById("Y").textContent = " times " + Y + "?";

    correctAnswer = X * Y

    // keeps hidden the playAgain prompt
    document.getElementById('playAgain').style.display = 'none';
};

/**
 * Reloads page when "reload" button is clicked
 */
document.getElementById("reload").onclick = function () {
    NewRound();
}

/**
 * Calls evaluate() when "Submit" button is clicked
 */
document.getElementById("evaluate").onclick = function () {
    validateAnswer();
}

/**
 * This method gets userInput and chesks for NaN. 
 * If not Number.isNaN, it then calls on evaluateAnswer() function to verify the correctAnswer.
 */
function validateAnswer() {

    // gets input value from user
    userInput = document.forms["myform"].elements["response"].value;

    // checks for NaN
    if (Number.isNaN(parseInt(userInput))) {
        textContent = "Not all values are numbers. Please try again."
        document.getElementById("alert").textContent = textContent;
        return
    } else {
        evaluateAnswer()
    }

}

/**
 * This method evaluates userInput to make sure it matches correctAnswer.
 */
function evaluateAnswer() {
    // checks if userInput matches correctAnswer
    if (parseInt(userInput) == correctAnswer) {
        document.getElementById("alert").textContent = "";

        // calls playAgain() if userInput is correct
        playAgainPrompt()
    } else {
        // displays "Please try again!" for incorrect correctAnswers
        textContent = "Please try again!"
        document.getElementById("alert").textContent = textContent;
    }
}

/**
 * This method is called by evaluateAnswer() when they get the correctAnswer correctly.
 * It clears page to ask user if they want to play again, ."
 */
function playAgainPrompt() {
    // hides "myform"
    document.getElementById('myform').style.display = 'none';

    // makes "playAgain" question visible
    document.getElementById('playAgain').style.display = 'block';

};

/**
 * If user clicks "yes" of the playAgainPrompt, it resets stage by calling NewRound().
 */
document.getElementById("yes").onclick = function () {
    document.forms["myform"].elements["response"].value = "";
    NewRound();
}

/**
 * If user clicks "no" in the playAgainPrompt, it displays goodbye text.
 */
document.getElementById("no").onclick = function () {
    textContent = "Thanks for playing, see you next time!"
    document.getElementById("playAgain").textContent = textContent;
}