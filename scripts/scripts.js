// ARITHMATIC FUNCTIONS - Defining the basic functions with ES6 syntax
 add = (a, b) =>  a + b;

 subtract = (a, b) => a - b;

 multiply = (a, b) => a * b;

 divide = (a, b) => {
     // Check for divide by zero error
     if (b == 0) {
         return alert("You can't divide by zero");
     }

     else {
        return  a / b;
     }
 }
 
  // Create operator function
  function operate(operation, a, b) {
    return operation(a, b);
 }


 
 // declare the current value array
 let currentValueFirst = [0];
 let currentValueSecond = [];
 let isOperatorActive = false;

 //convert to value to a string for display purposes
 currentValueDisplay = currentValueFirst.toString().replace(/,/g, "");
 

 // Define update value functions on keypress

 function updateCurrentValueFirst() {
     // remove the 0 at the start of a number
     if (currentValueFirst[0] == 0) {
         currentValueFirst.shift();
     }
    currentValueDisplay = currentValueFirst.toString().replace(/,/g, "");
    displayText.textContent = currentValueDisplay;
    return currentValueDisplay;
} 

function updateCurrentValueSecond() {
   currentValueDisplay = currentValueSecond.toString().replace(/,/g, "");
   displayText.textContent = currentValueDisplay;
   return currentValueDisplay;
} 


// Build the display
 const displayText = document.querySelector("#display-text");
 displayText.textContent = currentValueDisplay;



 // Make the numbers appear on display
 const numberOne = document.querySelector("#one");
 numberOne.addEventListener("click", () => {
     // checks which value array to push numbers to
     if (isOperatorActive == false) {
        currentValueFirst.push(1);
        updateCurrentValueFirst();    
     }
     else {
         currentValueSecond.push(1);
         updateCurrentValueSecond();
     }
 });

 const numberTwo = document.querySelector("#two");
 numberTwo.addEventListener("click", () => {
    currentValueFirst.push(2);
    updateCurrentValueFirst();
 });

 const numberThree = document.querySelector("#three");
 numberThree.addEventListener("click", () => {
    currentValueFirst.push(3);
    updateCurrentValueFirst();
 });

 // Prepare the math equation when operator button is pressed
 // Declare the operator variable default 'active' states
 let additionActive = false;
 let subtractionActive = false;
 let multiplicationActive = false;
 let divisionActive = false;

const additionKey = document.querySelector("#plus");
additionKey.addEventListener("click", () => {
    isOperatorActive = true;
    additionActive = true;

    subtractionActive = false;
    multiplicationActive = false;
    divisionActive = false;   
})



const equalsKey = document.querySelector("#equals");
equalsKey.addEventListener("click", () => {
    if (additionActive == true) {

    }
} )

 


