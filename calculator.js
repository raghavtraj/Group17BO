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
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the input elements
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const resultInput = document.getElementById('result');

    // Add event listeners to input1 and input2
    input1.addEventListener('input', updateResult);
    input2.addEventListener('input', updateResult);

    // Function to update the result input based on the values in input1 and input2
    function updateResult() {
        const value1 = parseFloat(input1.value) || 0; // Convert input values to numbers
        const value2 = parseFloat(input2.value) || 0;

        const sum = value1 + value2;

        resultInput.value = sum;
    }
});
