
document.getElementById('c2f').onclick = function () {
    c2f();
};

function c2f() {

    var number1, farenheit

    number1 = document.forms["myform"].elements["num1"].value;

    // checks for NaN
    if (Number.isNaN(parseInt(number1))) {
        textContent = "Not all values are numbers. Please try again."
        document.getElementById("alert").textContent = textContent;
        document.getElementById("result").textContent = "";
        return
    }

    document.getElementById("alert").textContent = "";

    number1 = parseInt(number1);

    farenheit = (9 / 5 * number1) + 32
    farenheit = farenheit.toFixed(0);
    document.getElementById("result").textContent = number1 + "C is " + farenheit + "F";
}


document.getElementById('f2c').onclick = function () {
    f2c();
};

function f2c() {

    var number1, farenheit

    number1 = document.forms["myform"].elements["num1"].value;

    // checks for NaN
    if (Number.isNaN(parseInt(number1))) {
        textContent = "Not all values are numbers. Please try again."
        document.getElementById("alert").textContent = textContent;
        document.getElementById("result").textContent = "";
        return
    }

    document.getElementById("alert").textContent = "";

    number1 = parseInt(number1);

    celsius = 5 / 9 * (number1 - 32)
    celsius = celsius.toFixed(0);
    document.getElementById("result").textContent = number1 + "F is " + celsius + "C";
}


document.getElementById('reset').onclick = function () {
    document.getElementById("result").textContent = "";
    document.getElementById("alert").textContent = "";
};