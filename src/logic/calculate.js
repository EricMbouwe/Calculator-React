import operate from './operate';

export default function calculate(calcData, buttonName) {
  let { total, next, operation } = calcData;

  const operators = ['+', '-', 'x', '÷'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  numbers.forEach(number => {
    if (buttonName === number) {
      next += `${number}`;
    }
  });

  operators.forEach(operator => {
    if (buttonName === operator) {
      operation = buttonName;
      if (total !== null) {
        if (operator !== 'x' && operator !== '÷') {
          total = operate(total, next, operation);
          next = '0';
        }
      } else {
        total = next;
        next = '0';
      }
    }
  });

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if (buttonName === '%' || buttonName === '+/-') {
    if (total) {
      total = operate(total, next, buttonName);
      next = '0';
    } else if (next) {
      total = operate(next, next, buttonName);
      next = '0';
    }
  }

  if (buttonName === '.') {
    next = `${next}.`;
  }

  if (buttonName === '=') {
    if (operation !== null) {
      total = operate(total, next, operation);
      next = '0';
    } else if (next !== null) {
      total = next;
    }
  }

  console.log(total);
  console.log(next);
  console.log(operation);

  return { total, next, operation };
}
