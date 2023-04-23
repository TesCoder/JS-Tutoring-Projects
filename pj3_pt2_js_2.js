/**
 * This method collects the form data, validates the seller name is larger than 2 characters,
 * validates that all the inputs in the form are Number type and then calls the updateTable function
 * using these values
 * @return {void}
*/
function submitFormHw3P2() {
    // collect form data
    var formData = collectInputsFromFormContainer();
    var sellerName = formData["seller-name"];
    delete formData["seller-name"];
    if (sellerName.length < 3) {
        return;
    }
    // validate form integers
    if (!isValidForm(formData, false)) {
        return;
    }
    // convert items inputs to numeric type
    var item1 = convertNumber(formData["item1-input"]);
    var item2 = convertNumber(formData["item2-input"]);
    var item3 = convertNumber(formData["item3-input"]);
    var item4 = convertNumber(formData["item4-input"]);
    updateTable(item1, item2, item3, item4);
}


/**
 * This method receives the Numeric values for items 1-4 then
 * initializes a variable with a value of 0. It will iterate over the 
 * table updating the quantity sold, and total item cost boxes. At each calculation
 * the variable holding 0 will += the result. After iteration the final amount box will 
 * be set to our variable and then it will be used to calculate and set the total weekly earnings box.
 * @param {Numeric} item1 the total amount of items sold for item1
 * @param {Numeric} item2 the total amount of items sold for item2
 * @param {Numeric} item3 the total amount of items sold for item3
 * @param {Numeric} item4 the total amount of items sold for item4
 * @return {void}
*/
function updateTable(item1, item2, item3, item4) {
    var total = 0;

    // bottom input boxes
    var totalAmountBox = findElementByXPath("//td[@id='total-amount-sold']//input");
    var totalWeeklyEarningsBox = findElementByXPath("//td[@id='total-weekly-earnings']//input");

    // array to contain items 1 - 4
    var itemValues = [item1, item2, item3, item4];

    // collect the items price text
    var prices = findElementsByXPath("//td[@class='item-price']//div/text()");

    // collect the quantity sold and total price table/input elements
    var quantitySold = findElementsByXPath("//td[@class='item-qt-sold']//input");
    var totalPrice = findElementsByXPath("//td[@class='item-total']//input");

    // iterate over parallel lists
    for (let i = 0; i < prices.snapshotLength; i++) {
        // collect the text content of prices
        let priceString = prices.snapshotItem(i).textContent;
        // remove "$" symbol and convert to number fixed to 2 decimal places
        let numberPrice = convertNumber(priceString.replace("$", "")).toFixed(2);
        // update coresponding quantity sold element with the item value
        quantitySold.snapshotItem(i).value = itemValues[i];
        // calculate total price and set as totalPrice element value
        totalPrice.snapshotItem(i).value = (itemValues[i] * numberPrice).toFixed(2);
        total += (itemValues[i] * numberPrice);
    }

    totalAmountBox.value = total.toFixed(2);
    totalWeeklyEarningsBox.value = calcTotalWeeklyEarnings(total).toFixed(2);
}

/**
 * This method is used to calculate the weekly earnings for the 
 * seller based on their total amount sold
 * @param {Number} totalAmountSold the total price of the sold items for the seller
 * @return {Number} the total weekly earning calculated 
*/
function calcTotalWeeklyEarnings(totalAmountSold) {
    return 250 + (totalAmountSold * 0.09);
}

/**
 * This method collects all inputs existing in the table on the page.
 * Then iterates over each on setting its value attribute to an empty string "".
 * This method resets the table to its initial value.
 * @return {void}
*/
function resetTable() {
    var inputs = findElementsByXPath("//td//input");
    for (let i = 0; i < inputs.snapshotLength; i++) {
        inputs.snapshotItem(i).value = "";
    }
}

/**
 * This method is not required and is only attached to the vendor name input.
 * It I used to validate that the vendor name is larger than 2 characters.
 * @param {object} btn the vendor input button
 * @return {bool} true if string is larger than 2 characters.
*/
function validateInputStringSize(btn) {
    var inputString = btn.value;
    if (inputString.length >= 3) {
        setValidState(btn, true);
        return;
    }
    setValidState(btn, false);
}

/**
 * This function is used as a helper to validate the 
 * user input number is non negative.
 * @param {Number} num
 * @return {bool}  
*/
function isNonNegative(num) {
    return (num > -1);
}

/**
 * This method is run once the page content has loaded and collects all the inputs listed in the table
 * to set the starting state as 'disabled' so that the user can not interact with these input boxes.
 * @return {void}
*/
function disableInputsInTable() {
    var elements = findElementsByXPath(
        "//td[@class='item-qt-sold' or @class='item-total' or @id='total-amount-sold' or @id='total-weekly-earnings' ]//input"
    );
    for (let i = 0; i < elements.snapshotLength; i++) {
        elements.snapshotItem(i).disabled = true;
    }

}

document.addEventListener("DOMContentLoaded", disableInputsInTable);

/**
 * This method collects all elements of the class invis
 * then using jquery makes them appear on screen
 * one after the next
 * @return {void}
 */
function presentation() {
    $(".invis").each(function (index) {
        $(this).delay(1500 * index).fadeIn(1500);
    });
    $(".invis2").each(function (index) {
        $(this).delay(1500 * index).fadeIn(1500);
    });
}

document.addEventListener("DOMContentLoaded", presentation);

