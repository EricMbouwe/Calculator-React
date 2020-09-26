import operate from './operate';

export default function calculate(calcData, buttonName) {
  let { total, next, operation } = calcData;

  const operators = ['+', '-', 'x', '÷'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  numbers.forEach(number => {
    if (buttonName === number) {
      if (next) {
        next += number;
      } else {
        next = number;
      }
    }
  });

  operators.forEach(operator => {
    if (buttonName === operator && (total || next) && total !== 'E') {
      if (total !== null && next !== null && operation) {
        total = operate(total, next, operation);
        operation = buttonName;
        next = null;
      } else if (next) {
        total = next;
        operation = buttonName;
        next = null;
      } else {
        operation = buttonName;
      }
    }
  });

  if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  }

  if ((buttonName === '%' || buttonName === '+/-') && total !== 'E') {
    if (total) {
      total = operate(total, '0', buttonName);
      next = null;
    } else if (next) {
      total = operate(next, '0', buttonName);
      next = null;
    }
  }

  if (buttonName === '.' && next) {
    next = `${next}.`;
  }

  if (buttonName === '=') {
    if (operation !== null && next) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    } else if (next !== null) {
      operation = null;
      total = next;
      next = null;
    }
  }

  return { total, next, operation };
}
