const display = document.getElementById('display');

// Function to append values to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to perform calculations
function calculate() {
    console.log("hello");
    try {
        expression=display.value;
        for(i=0;i<expression.length;i++)
        {
        if(expression[i]=='√')
        {
          i++;
          while((expression[i]=='(')||!(isNaN(parseInt(expression[i])))) 
          {
            i++;
          }
        expression=expression.substring(0,i)+')'+expression.substring(i);
        }
        }
        expression=expression.replace(/\√/g,'Math.sqrt(');
        expression=expression.replace(/\^/g, '**');
        console.log(expression);
        display.value = eval(expression);

    } catch (error) {
        console.log(error);
        display.textContent = 'Error';
    }
}

let  displayfirst = document.getElementById('displayfirst');
let displaysecond = document.getElementById('displaysecond');
let result = document.getElementById('result');

displayfirst.addEventListener("input",updateResult);
displaysecond.addEventListener("input",updateResult);

function updateResult(){
    let displaysecondValue = displaysecond.value;
    let displayfirstValue = displayfirst.value;
    if(displaysecondValue === '') {
        result.value = displayfirstValue;
    } else if(displayfirstValue === '') {
        result.value = displaysecondValue;
    }
    else {
        result.value = displaysecondValue * displayfirstValue;
    }
}