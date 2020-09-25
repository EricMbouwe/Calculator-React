import operate from './operate';

// eslint-disable-next-line
export let inputs = [];

export default function calculate(calcData, buttonName) {
  let { total, next, operation } = calcData;

  const operators = ['+', '-', 'x', '+/-', '÷', '%'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  operators.forEach(operator => {
    if (buttonName === operator) {
      if (total == null || total === '0') {
        operation = buttonName;
        total = next;
        next = '0';
        inputs = [];
      } else {
        if (buttonName !== operation) {
          total = operate(total, next, operation);
          operation = buttonName;
        } else {
          operation = buttonName;
          total = operate(total, next, operation);
        }
        next = '0';
        inputs = [];
      }
    }
  });

  numbers.forEach(number => {
    if (buttonName === number) {
      inputs.push(number);
      next = inputs.join('');
    }
  });

  if (buttonName === 'AC') {
    total = '0';
    next = '0';
    inputs = [];
    operation = null;
  }

  if (buttonName === '=') {
    if (operation !== null) {
      total = operate(total, next, operation);
      next = '0';
      inputs = [];
    } else {
      total = next;
      inputs = [];
    }
  }

  return { total, next, operation };
}
