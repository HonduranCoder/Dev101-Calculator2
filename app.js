// import functions and grab DOM elements
import { add } from '../utils.js';
import { subtract } from '../utils.js';
import { multiply } from '../utils.js';
import { divide } from '../utils.js';

/*function add (num1, num2) {
  return num1 + num2;

function subtract(num1, num2){
  return num1 - num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function divide(num1, num2){
  return num1 / num2;
}*/

const addInputEl1 = document.getElementById('input-add1');
const addInputEl2 = document.getElementById('input-add2');
const addButtonEl = document.getElementById('add-button');
const addResultEl = document.getElementById('add-result'); 

const subtractInputEl1 = document.getElementById('input-subtract1');
const subtractInputEl2 = document.getElementById('input-subtract2');
const subtractButtonEl = document.getElementById('subtract-button');
const subtractResultEl = document.getElementById('subtract-result');

const multiplyInputEl1 = document.getElementById('input-subtract1');
const multiplyInputEl2 = document.getElementById('input-subtract2');
const multiplyButtonEl = document.getElementById('subtract-button');
const multiplyResultEl = document.getElementById('subtract-result');

const divideInputEl1 = document.getElementById('input-subtract1');
const divideInputEl2 = document.getElementById('input-subtract2');
const divideButtonEl = document.getElementById('subtract-button');
const divideResultEl = document.getElementById('subtract-result');
// initialize state
/*
html-id= "addTimesClicked"
const addTimesClickedEl = document.getElementbyId('times-clicked')
let addCount = 0; (put in global scope)
addResultEl.textContent - sum; 
addCount - addCount + 1;
*/
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new stat
addButtonEl.addEventListener('click', ()=>{
    const firstValue = addInputEl1.value;
    const secondValue = addInputEl2.value;

    const sum = add (firstValue, secondValue);

    addResultEl.textContent = sum;
});  

subtractButtonEl.addEventListener('click', ()=>{
    const firstValue = subtractInputEl1.value;
    const secondValue = subtractInputEl2.value;

    const sum = add (firstValue, secondValue);

    subtractResultEl.textContent = sum;
});  

multiplyButtonEl.addEventListener('click', ()=>{
    const firstValue = multiplyInputEl1.value;
    const secondValue = multiplyInputEl2.value;

    const sum = add (firstValue, secondValue);

    multiplyResultEl.textContent = sum;
});  

divideButtonEl.addEventListener('click', ()=>{
    const firstValue = divideInputEl1.value;
    const secondValue = divideInputEl2.value;

    const sum = add (firstValue, secondValue);

    divideResultEl.textContent = sum;
});  
