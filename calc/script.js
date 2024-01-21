document.addEventListener('DOMContentLoaded', function() {
    const screen = document.getElementById('screen');
    const clearBtn = document.getElementById('clear');
    const backspaceBtn = document.getElementById('backspace');
    const divideBtn = document.getElementById('divide');
    const multiplyBtn = document.getElementById('multiply');
    const subtractBtn = document.getElementById('subtract');
    const addBtn = document.getElementById('add');
    const equalsBtn = document.getElementById('equals');
    const decimalBtn = document.getElementById('decimal');
  
    const numberButtons = document.querySelectorAll('.btn:not(#equals):not(#clear):not(#backspace):not(#divide):not(#multiply):not(#subtract):not(#add):not(#decimal)');
  
    let currentInput = '';
    let operator = '';
    let previousInput = '';
    
    numberButtons.forEach(button => {
      button.addEventListener('click', function() {
        currentInput += button.innerText;
        screen.innerText = currentInput;
      });
    });
  
    clearBtn.addEventListener('click', function() {
      currentInput = '';
      operator = '';
      previousInput = '';
      screen.innerText = '0';
    });
  
    backspaceBtn.addEventListener('click', function() {
      currentInput = currentInput.slice(0, -1);
      screen.innerText = currentInput || '0';
    });
  
    divideBtn.addEventListener('click', function() {
      operator = '/';
      previousInput = currentInput;
      currentInput = '';
    });
  
    multiplyBtn.addEventListener('click', function() {
      operator = '*';
      previousInput = currentInput;
      currentInput = '';
    });
  
    subtractBtn.addEventListener('click', function() {
      operator = '-';
      previousInput = currentInput;
      currentInput = '';
    });
  
    addBtn.addEventListener('click', function() {
      operator = '+';
      previousInput = currentInput;
      currentInput = '';
    });
  
    decimalBtn.addEventListener('click', function() {
      if (!currentInput.includes('.')) {
        currentInput += '.';
        screen.innerText = currentInput;
      }
    });
  
    equalsBtn.addEventListener('click', function() {
      if (operator && previousInput) {
        currentInput = eval(`${previousInput} ${operator} ${currentInput}`).toString();
        screen.innerText = currentInput;
        operator = '';
        previousInput = '';
      }
    });
  });
  