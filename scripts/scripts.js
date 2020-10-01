// ARITHMATIC FUNCTIONS - Defining the basic functions with ES6 syntax
 add = (a, b) =>  {
     // round the answer to 2 decimal places if it's a decimal - return just the answer if not
     if (Number.isInteger(a + b) == true) {
        return a + b
     }
     else {
        return (a + b).toFixed(2)
     }
};

 subtract = (a, b) => {
    // round the answer to 2 decimal places if it's a decimal - return just the answer if not
    if (Number.isInteger(a - b) == true) {
        return a - b;
    }
    else {
        return (a - b).toFixed(2);
    }
 }

 multiply = (a, b) => {
    // round the answer to 2 decimal places if it's a decimal - return just the answer if not
    if (Number.isInteger(a * b) == true) {
        return a * b
    }
    else {
        return (a * b).toFixed(2)
    }
    
 }

 divide = (a, b) => {
     // Check for divide by zero error
     if (b == 0) {
        // // bug fix - set answer to empty string
        answer = "";
        return answer;
     }

     else {
         if(Number.isInteger(a / b) == true) {
             return a / b;
         }
         else {
            return  (a / b).toFixed(2);
         }
     }
 }
 
 // declare the current value array
 let currentValueFirst = [0];
 let currentValueSecond = [];
 resetAllValues = () => {currentValueFirst = [0]; currentValueSecond = []};
 //declare the answer variables
 let answer = "";
 //declare boolean to test which value array to send numbers to
 let isOperatorActive = false;

 //convert to value to a string for display purposes
 currentValueDisplay = currentValueFirst.toString().replace(/,/g, "");

 // define functions to convert the value arrays to a number
 valueFirstNumber = () => parseFloat(currentValueFirst.join(""));
 valueSecondNumber = () => parseFloat(currentValueSecond.join(""));
 

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

// declare the hard reset function - resets everything to default value
function hardReset() {
    answer = "";
    currentValueFirst = [0];
    currentValueSecond = [];
    isOperatorActive = false;  
    additionActive = false;
    subtractionActive = false;
    multiplicationActive = false;
    divisionActive = false;
    
    additionKey.removeAttribute("style");
    divisionKey.removeAttribute("style");
    multiplicationKey.removeAttribute("style");
    subtractionKey.removeAttribute("style");
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
 
 const decimalKey = document.querySelector("#decimal");
 decimalKey.addEventListener("click", () => {
     // check if there is already a decimal in the array - do not add more if there is one already
     let isDecimal = (element) => element == ".";

     if (currentValueFirst.some(isDecimal) == false) {
        // checks which value array to push numbers to
        if (isOperatorActive == false) {
            currentValueFirst.push(".");
            updateCurrentValueFirst();    
         }
    }
    if (currentValueSecond.some(isDecimal) == false) {
        if (isOperatorActive == true) {
            currentValueSecond.push(".");
            updateCurrentValueSecond();
        }
    }
     
 });
 
const clearKey = document.querySelector("#clear");
clearKey.addEventListener("click", () => {
     hardReset()
     displayText.textContent = 0;
    });

const backSpace = document.querySelector("#backspace");
backSpace.addEventListener("click", () => {
    // if the current value is empty, do nothing 
    if (currentValueDisplay == 0) {
        return
    }
    else if (answer != ""){
        hardReset();
        displayText.textContent = 0;
    }
    // test which data array the user is working in to remove the last element
    else if (isOperatorActive == false) {
        // do not backspace if there is only one digit
        if (currentValueFirst.length == 1) {return}
        currentValueFirst.pop();
        updateCurrentValueFirst();
    }

    else {
        // do not backspace if there is only one digit
        if(currentValueSecond.length == 1) {return}
        currentValueSecond.pop();
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
    
    // Change color
    additionKey.style.backgroundColor = "#C7F9CC";
    subtractionKey.removeAttribute("style");
    multiplicationKey.removeAttribute("style");
    divisionKey.removeAttribute("style");
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

    // change color 
    additionKey.removeAttribute("style");
    subtractionKey.style.backgroundColor = "#C7F9CC";
    multiplicationKey.removeAttribute("style");
    divisionKey.removeAttribute("style");

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

    additionKey.removeAttribute("style");
    multiplicationKey.style.backgroundColor = "#C7F9CC";
    subtractionKey.removeAttribute("style");
    divisionKey.removeAttribute("style");

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
    subtractionActive = false;
    multiplicationActive = false;

    additionKey.removeAttribute("style");
    divisionKey.style.backgroundColor = "#C7F9CC";
    multiplicationKey.removeAttribute("style");
    subtractionKey.removeAttribute("style");

})


const equalsKey = document.querySelector("#equals");
equalsKey.addEventListener("click", () => {
    // check to make sure there are two numbers to be computed - otherwise do nothing
    if (currentValueSecond.length > 0) {
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
            if (answer != "") {currentValueDisplay = answer; updateDisplay();}
            
            // display play a message if user tried divided by zero and force a reset
            if (answer == "" || isNaN(answer) === true) {currentValueDisplay = "Divide by zero error"; displayText.textContent = currentValueDisplay; hardReset();}
    }

        hardReset();
        divisionActive = false;
}
} )
