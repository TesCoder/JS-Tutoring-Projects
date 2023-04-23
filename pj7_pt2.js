// call checkFontStyleCheckbox method
checkFontStyleCheckbox();

/*
* The below method gets input elements from fstyleOptions & iterates through them to call updateStyle on click
*/
function checkFontStyleCheckbox() {
    // get radio or checkboxes contianer's reference
    var el = document.getElementById('fstyleOptions');
  
    // get item input element refrence from container
    var optionItems = el.getElementsByTagName('input');
  
    // get products length
    var len = optionItems.length;
  
    // call updateStyle() function to onclick event on every checkbox
    for (var i = 0; i < len; i++) {
    //   if (products[i].type === 'checkbox') { // only useful when just radio boxes or to specify type
    //     products[i].onclick = updateStyle; 
    //   }
      optionItems[i].onclick = updateStyle;
    }
  }

/*
* Below arrays are used to check whether selected checkbox or radio's style type and if it was previously added.
* If it was previoulsy added, it is removed if appropriate (for example: in case of color: if green was selected, 
    it is removed then a different color is put in its place.)
*/
var fontStyles = ["italic", "bold", "underline"]
// var fontStylesAdded = [] // not needed
var fontSizes = ["small", "medium", "large"]
var fontSizesAdded = []
var fontColors = ["red", "green"]
var fontColorAdded = []

// called onclick of radio or checkboxes
function updateStyle(e) {

var paraObj = document.getElementById("paragraph").classList;   

// 'this' reffered to checkbox pr radio clicked on
var myForm = this.form;

// when checkbox or radio is checked, it adds the class to the paraObj
if (this.checked) {

    // below if statements determine type of style and adds them to appropriate 'Added' array for tracking
    // this helps in removing prior styling where an overlap can take place
    if (fontStyles.includes(this.value) ) {
        paraObj.add(this.value)
    }
    if (fontSizes.includes(this.value) && !fontSizesAdded.includes(this.value)) {
        fontSizesAdded.push(this.value);
        paraObj.add(this.value)
    }
    if (fontColors.includes(this.value) && !fontColorAdded.includes(this.value)) {
        fontColorAdded.push(this.value);
        paraObj.add(this.value)
    }

    // Handles changed font size radio button
    // checks if font size has previously been selected, removes if so to prevent overlap
    fontSizesAdded.forEach(fontSize =>{
        if (fontSize != this.value && fontSizes.includes(this.value)) {
            fontSizesAdded.shift();
            paraObj.remove(fontSize)
        }
    });

    // Handles changed font color radio button
    // checks if font color has previously been selected, removes if so to prevent overlap
    fontColorAdded.forEach(fontColor =>{
        if (fontColor != this.value && fontColors.includes(this.value)) {
            fontColorAdded.shift();
            paraObj.remove(fontColor)
        }
    });
}  

// when checkbox is unchecked, it executes below
// Note: radio buttons do not return false. unchecked radio buttons are adressed above under "changed radio buttons"
if (this.checked == false) {
    paraObj.remove(this.value)

}

}