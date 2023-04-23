/*
* A do...while loop to multiply and add 5 to 25
*/
var sum = 0;
var product = 1;
for ( var number = 5; number <= 25; number += 4 ){
    sum += number;
    product *= number;
}
document.getElementById("alert").textContent = ( "The result of 5 * 9 * 13 * 17 * 21 * 25 is .... " + product.toLocaleString());
document.getElementById("alert1").textContent = ( "The result of 5 + 9 + 13 + 17 + 21 + 25 is ... " + sum);


/*
* A do...while loop to multiply and add 3 to 18
*/
var i=3;
var sum2 = 0;
var product2 = 1;
do {
    document.write("The result number is " + i);
    sum2 += i;
    product2 *= i;
    document.write("<br>");
    i = i + 3;
} while (i<=18);

document.getElementById("alert4").textContent = ( "The result of 3 + 6 + 9 + 12 + 15 + 18 is ... " + sum2);
document.getElementById("alert3").textContent = ( "The result of 3 * 6 * 9 * 12 * 15 * 18 is ... " + product2.toLocaleString());

