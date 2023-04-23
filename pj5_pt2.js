
/*
* This function executes the goToNewPage function on change with destList1
*/
document.getElementById("destList1").onchange = function () {
    const destList = "destList1"
    goToNewPage(destList);
}

/*
* This function executes the goToNewPage function on change with destList2
*/
document.getElementById("Go").onclick = function () {
    const destList = "destList2"
    goToNewPage(destList);
}

/*
* This function opens a new page and displays the selected value
*/
function goToNewPage(destList) {
    var selectedVal = document.getElementById(destList);
    var myDestination = selectedVal.value;

    if (myDestination != "Choose Destination:") {
        window.open(myDestination);
    }

}