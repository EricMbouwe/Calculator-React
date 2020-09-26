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
    if (buttonName === operator) {
      operation = buttonName;
      if (total !== null && next !== null) {
        total = operate(total, next, operation);
        next = null;
      } else if (next) {
        total = next;
        next = null;
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
      next = null;
    } else if (next) {
      total = operate(next, next, buttonName);
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
