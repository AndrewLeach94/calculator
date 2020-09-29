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
 
 // declare the current value array
 let currentValueFirst = [0];
 let currentValueSecond = [];
 resetAllValues = () => {currentValueFirst = [0]; currentValueSecond = []};
 //declare the answer variables
 let answer = "";
//  let sum = "";
//  let difference;
//  let product;
//  let quotient;
 //declare boolean to test which value array to send numbers to
 let isOperatorActive = false;

 //convert to value to a string for display purposes
 currentValueDisplay = currentValueFirst.toString().replace(/,/g, "");

 // define functions to convert the value arrays to a number
 valueFirstNumber = () => parseInt(currentValueFirst.join(""));
 valueSecondNumber = () => parseInt(currentValueSecond.join(""));
 

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

 // declare function to update the text display
 updateDisplay = () => {
     if (isNaN(currentValueDisplay) == false) {
        displayText.textContent = currentValueDisplay;
     }
 }



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
     // checks which value array to push numbers to
     if (isOperatorActive == false) {
        currentValueFirst.push(2);
        updateCurrentValueFirst();    
     }
     else {
         currentValueSecond.push(2);
         updateCurrentValueSecond();
     }
 });

 const numberThree = document.querySelector("#three");
 numberThree.addEventListener("click", () => {
     // checks which value array to push numbers to
     if (isOperatorActive == false) {
        currentValueFirst.push(3);
        updateCurrentValueFirst();    
     }
     else {
         currentValueSecond.push(3);
         updateCurrentValueSecond();
     }
 });

 const numberFour = document.querySelector("#four");
 numberFour.addEventListener("click", () => {
     // checks which value array to push numbers to
     if (isOperatorActive == false) {
        currentValueFirst.push(4);
        updateCurrentValueFirst();    
     }
     else {
         currentValueSecond.push(4);
         updateCurrentValueSecond();
     }
 });
 
 const numberFive = document.querySelector("#five");
 numberFive.addEventListener("click", () => {
     // checks which value array to push numbers to
     if (isOperatorActive == false) {
        currentValueFirst.push(5);
        updateCurrentValueFirst();    
     }
     else {
         currentValueSecond.push(5);
         updateCurrentValueSecond();
     }
 });

 const numberSix = document.querySelector("#six");
 numberSix.addEventListener("click", () => {
     // checks which value array to push numbers to
     if (isOperatorActive == false) {
        currentValueFirst.push(6);
        updateCurrentValueFirst();    
     }
     else {
         currentValueSecond.push(6);
         updateCurrentValueSecond();
     }
 });

 const numberSeven = document.querySelector("#seven");
 numberSeven.addEventListener("click", () => {
     // checks which value array to push numbers to
     if (isOperatorActive == false) {
        currentValueFirst.push(7);
        updateCurrentValueFirst();    
     }
     else {
         currentValueSecond.push(7);
         updateCurrentValueSecond();
     }
 });

 const numberEight = document.querySelector("#eight");
 numberEight.addEventListener("click", () => {
     // checks which value array to push numbers to
     if (isOperatorActive == false) {
        currentValueFirst.push(8);
        updateCurrentValueFirst();    
     }
     else {
         currentValueSecond.push(8);
         updateCurrentValueSecond();
     }
 });

 const numberNine = document.querySelector("#nine");
 numberNine.addEventListener("click", () => {
     // checks which value array to push numbers to
     if (isOperatorActive == false) {
        currentValueFirst.push(9);
        updateCurrentValueFirst();    
     }
     else {
         currentValueSecond.push(9);
         updateCurrentValueSecond();
     }
 });

 const numberZero = document.querySelector("#zero");
 numberZero.addEventListener("click", () => {
     // checks which value array to push numbers to
     if (isOperatorActive == false) {
        currentValueFirst.push(0);
        updateCurrentValueFirst();    
     }
     else {
         currentValueSecond.push(0);
         updateCurrentValueSecond();
     }
 });






 // Prepare the math equation when operator button is pressed
 // Declare the operator variable default 'active' states
 let additionActive = false;
 let subtractionActive = false;
 let multiplicationActive = false;
 let divisionActive = false;

const additionKey = document.querySelector("#plus");
additionKey.addEventListener("click", () => {
    // is the user adding an additional operation? 
    if (answer != "") {
        // only perform the operation if the second value carries a value - check for which operation to complete
        if (isNaN(valueSecondNumber()) == false) {
            if (subtractionActive == true) {answer = subtract(answer, valueSecondNumber())};
            if (additionActive == true) {answer = add(answer, valueSecondNumber())};
            if (multiplicationActive == true) {answer = multiply(answer, valueSecondNumber())};
            if (divisionActive == true) {answer = divide(answer, valueSecondNumber())};
         }
         currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }
    // if not...
    if (additionActive == true && answer == "") {
        answer = add(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    if (subtractionActive == true && answer == "") {
        answer = subtract(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    if (multiplicationActive == true && answer == "") {
        answer = multiply(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    if (divisionActive == true && answer == "") {
        answer = divide(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }


    // Change addition switch to true and disable any others
    isOperatorActive = true;
    additionActive = true;

    subtractionActive = false;
    multiplicationActive = false;
    divisionActive = false;
})

const subtractionKey = document.querySelector("#minus");
subtractionKey.addEventListener("click", () => {
    // is the user adding an additional operation? 
    if (answer != "") {
        // only perform the operation if the second value carries a value - check for which operation to complete
        if (isNaN(valueSecondNumber()) == false) {
           if (subtractionActive == true) {answer = subtract(answer, valueSecondNumber())};
           if (additionActive == true) {answer = add(answer, valueSecondNumber())};
           if (multiplicationActive == true) {answer = multiply(answer, valueSecondNumber())};
           if (divisionActive == true) {answer = divide(answer, valueSecondNumber())};
        }
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }
    // if not...
    if (additionActive == true && answer == "") {
        answer = add(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    if (subtractionActive == true && answer == "") {
        answer = subtract(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    if (multiplicationActive == true && answer == "") {
        answer = multiply(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    if (divisionActive == true && answer == "") {
        answer = divide(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    // Change addition switch to true and disable any others
    isOperatorActive = true;
    subtractionActive = true;

    additionActive = false;
    multiplicationActive = false;
    divisionActive = false;
})

const multiplicationKey = document.querySelector("#multiply");
multiplicationKey.addEventListener("click", () => {
    // is the user adding an additional operation? 
    if (answer != "") {
        // only perform the operation if the second value carries a value - check for which operation to complete
        if (isNaN(valueSecondNumber()) == false) {
           if (subtractionActive == true) {answer = subtract(answer, valueSecondNumber())};
           if (additionActive == true) {answer = add(answer, valueSecondNumber())};
           if (multiplicationActive == true) {answer = multiply(answer, valueSecondNumber())};
           if (divisionActive == true) {answer = divide(answer, valueSecondNumber())};
        }
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }
    // if not...
    if (additionActive == true && answer == "") {
        answer = add(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    if (subtractionActive == true && answer == "") {
        answer = subtract(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    if (multiplicationActive == true && answer == "") {
        answer = multiply(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    if (divisionActive == true && answer == "") {
        answer = divide(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    // Change addition switch to true and disable any others
    isOperatorActive = true;
    multiplicationActive = true;

    additionActive = false;
    subtractionnActive = false;
    divisionActive = false;
})

const divisionKey = document.querySelector("#divide");
divisionKey.addEventListener("click", () => {
    // is the user adding an additional operation? 
    if (answer != "") {
        // only perform the operation if the second value carries a value - check for which operation to complete
        if (isNaN(valueSecondNumber()) == false) {
           if (subtractionActive == true) {answer = subtract(answer, valueSecondNumber())};
           if (additionActive == true) {answer = add(answer, valueSecondNumber())};
           if (multiplicationActive == true) {answer = multiply(answer, valueSecondNumber())};
           if (divisionActive == true) {answer = divide(answer, valueSecondNumber())};
        }
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }
    // if not...
    if (additionActive == true && answer == "") {
        answer = add(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    if (subtractionActive == true && answer == "") {
        answer = subtract(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    if (multiplicationActive == true && answer == "") {
        answer = multiply(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    if (divisionActive == true && answer == "") {
        answer = divide(valueFirstNumber(), valueSecondNumber());
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
    }

    // Change addition switch to true and disable any others
    isOperatorActive = true;
    divisionActive = true;

    additionActive = false;
    subtractionnActive = false;
    multiplicationActive = false;
})





const equalsKey = document.querySelector("#equals");
equalsKey.addEventListener("click", () => {
    // need to convert the array values to numbers so they can plugged into the arithmatic function
    if (additionActive == true) {
        if (answer != "" && isNaN(answer) == false) {answer = add(answer, valueSecondNumber())};
        if (answer == "") {answer = add(valueFirstNumber(), valueSecondNumber())};
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
        additionActive = false;
    }

    if (subtractionActive == true) {
        if (answer != "" && isNaN(answer) == false) {answer = subtract(answer, valueSecondNumber())};
        if (answer == "") {answer = subtract(valueFirstNumber(), valueSecondNumber())};
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
        subtractionActive = false;
    }

    if (multiplicationActive == true) {
        if (answer != "" && isNaN(answer) == false) {answer = multiply(answer, valueSecondNumber())};
        if (answer == "") {answer = multiply(valueFirstNumber(), valueSecondNumber())};
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
        multiplicationActive = false;
    }

    if (divisionActive == true) {
        if (answer != "" && isNaN(answer) == false) {answer = divide(answer, valueSecondNumber())};
        if (answer == "") {answer = divide(valueFirstNumber(), valueSecondNumber())};
        currentValueDisplay = answer;
        updateDisplay();
        resetAllValues();
        divisionActive = false;
    }

} )

 

