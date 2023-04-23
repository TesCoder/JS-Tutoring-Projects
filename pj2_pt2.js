
document.getElementById('process').onclick = function () {
    process();
};
function process() {

    var number1, number2, n1, n2, sum, avg, product, min, max;

    number1 = document.forms["myform"].elements["num1"].value;
    number2 = document.forms["myform"].elements["num2"].value;
    number3 = document.forms["myform"].elements["num3"].value;

    textContent = Number.isInteger(number1)
    document.getElementById("alert").textContent = textContent;

    if (!Number.isInteger(parseInt(number1)) || !Number.isInteger(parseInt(number2)) || !Number.isInteger(parseInt(number3))) {
        textContent = "Not all values are numbers. Please try again."
        document.getElementById("alert").textContent = textContent;

        document.getElementById("sum").textContent = "";
        document.getElementById("avg").textContent = "";
        document.getElementById("product").textContent = "";
        document.getElementById("min").textContent = "";
        document.getElementById("max").textContent = "";
        return
    }

    document.getElementById("alert").textContent = "";

    n1 = parseInt(number1);
    n2 = parseInt(number2);
    n3 = parseInt(number3);

    sum = n1 + n2 + n3;
    avg = (n1 + n2 + n3) / 3;
    product = n1 * n2 * n3;
    min = Math.min(n1, n2, n3)
    max = Math.max(n1, n2, n3)

    sum = "The sum of the numbers is: " + sum;
    avg = "The avg of the numbers is: " + avg.toFixed(2);
    product = "The prod of the numbers is: " + product;
    min = "The min of the numbers is: " + min;
    max = "The max of the numbers is: " + max;

    document.getElementById("sum").textContent = sum;
    document.getElementById("avg").textContent = avg;
    document.getElementById("product").textContent = min;
    document.getElementById("min").textContent = min;
    document.getElementById("max").textContent = max;
}
