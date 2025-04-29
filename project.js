// project.js - JavaScript functionality for Calculator

document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('input');
  const buttons = document.querySelectorAll('button');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.textContent;
      
      if (value === 'AC') {
        input.value = '';
      } else if (value === 'DEL') {
        input.value = input.value.slice(0, -1);
      } else if (value === '=') {
        try {
          // Evaluate the expression safely
          input.value = eval(input.value) || '';
        } catch {
          input.value = 'Error';
        }
      } else {
        // Append the button value to the input
        if (input.value === 'Error') {
          input.value = '';
        }
        input.value += value;
      }
    });
  });
});
