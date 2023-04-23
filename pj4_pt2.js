const tableDiv = document.getElementById("tableDiv");
const titleRow = ["Year", "Deposited Amount", "Interest Rate"]

window.onload = setTable()

// sets the table by defining amountDeposited and interest rates
function setTable() {
    let amountDeposited = 1050.00
    let interestRate1 = 0.05
    let interestRate2 = 0.06
    let interestRate3 = 0.07

    let intRates = [0.05, 0.06, 0.07]
    intRates.forEach(element => {
        table(amountDeposited, titleRow, element)
    }); 
}

/*
* Function creates table 1 with values passed from createTables()
*/
function table(amountDeposited, titleRow, interestRate) {
    let table = document.createElement("table");

    // iterates through rows to assign values
    for (row = 1; row <= 6; row++) {
        // creates years variable by subtracting by 2, which is used to calculat finalAmount
        let years = row-2

        // calculates final amount based on equation A = P(1 + {r}/{n})^{nt}
        let finalAmount = amountDeposited * Math.pow(1 + interestRate, years);;
        finalAmount = finalAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})

        // Determins # of years interest has accrued (for column 1)
        let yearLabel = row -1

        // creates tr(table row) element to witch td is attached
        tr = document.createElement('tr');
        
        // iterates through columns
        for (col = 1; col <= 3; col++) {

            // adds first row titles
            // adds to firstRow class for CCS coloring
            if (row==1) {
                td = document.createElement('td');
                td.classList.add('firstRow');
                tr.appendChild(td);
                td.innerHTML += titleRow[col-1];
            } 

            // Displays year # on column 1
            // adds to evenRow or oddRow CSS for css coloring
            else if (row > 1 && col==1) {
                if (row % 2 == 0) {
                    td = document.createElement('td');
                    td.classList.add('evenRow');
                    tr.appendChild(td);
                    td.innerHTML += yearLabel;
                } else {
                    td = document.createElement('td');
                    td.classList.add('oddRow');
                    tr.appendChild(td);
                    td.innerHTML += yearLabel;
                }
            }

            // creates column with finalAmount
            // adds to evenRow or oddRow CSS for css coloring
            else if (row > 1 && col==2) {
                if (row % 2 == 0) {
                    td = document.createElement('td');
                    td.classList.add('evenRow');
                    tr.appendChild(td);
                    td.innerHTML += finalAmount;
                } else {
                    td = document.createElement('td');
                    td.classList.add('oddRow');
                    tr.appendChild(td);
                    td.innerHTML += finalAmount;
                }
            }

            // creates column with interestRates
            // adds to evenRow or oddRow CSS for css coloring
            else if (row > 1 && col==3) {
                if (row % 2 == 0) {
                    td = document.createElement('td');
                    td.classList.add('evenRow');
                    tr.appendChild(td);
                    td.innerHTML += interestRate;
                } else {
                    td = document.createElement('td');
                    td.classList.add('oddRow');
                    tr.appendChild(td);
                    td.innerHTML += interestRate;
                }
            }
        }
        table.appendChild(tr);
    }

    tableDiv.appendChild(table);
}
