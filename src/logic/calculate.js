import operate from './operate';

// eslint-disable-next-line
export let inputs = [];

export default function calculate(calcData, buttonName) {
  let { total, next, operation } = calcData;

  const operators = ['+', '-', 'x', '÷'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  numbers.forEach(number => {
    if (buttonName === number) {
      inputs.push(number);
      next = inputs.join('');
    }
  });

  operators.forEach(operator => {
    if (buttonName === operator) {
      operation = buttonName;
      if (total !== null) {
        if (operator !== 'x' && operator !== '÷') {
          total = operate(total, next, operation);
          next = '0';
          inputs = [];
        }
      } else {
        total = next;
        next = '0';
        inputs = [];
      }
    }
  });

  if (buttonName === 'AC') {
    total = null;
    next = null;
    inputs = [];
    operation = null;
  }

  if (buttonName === '%') {
    if (total) {
      total = operate(total, next, buttonName);
      next = '0';
      inputs = [];
    } else if (next) {
      total = operate(next, next, buttonName);
      next = '0';
      inputs = [];
    }
  }

  if (buttonName === '+/-') {
    if (total !== null) {
      total = operate(total, next, buttonName);
    } else {
      total = operate(next, total, buttonName);
    }
    inputs = [];
  }

  if (buttonName === '.') {
    if (total !== null) {
      total = operate(total, next, buttonName);
    } else {
      total = operate(next, total, buttonName);
    }
    inputs = [];
  }

  if (buttonName === '=') {
    if (operation !== null) {
      total = operate(total, next, operation);
      next = '0';
      inputs = [];
    } else if (next !== null) {
      total = next;
      inputs = [];
    }
  }

  console.log(total);
  console.log(next);
  console.log(operation);

  return { total, next, operation };
}
