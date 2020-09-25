import operate from './operate';

export default function calculate(calcData, buttonName) {
  let { total, next, operation } = calcData;

  const operators = ['+', '-', 'x', '+/-', '÷', '%'];

  operators.forEach(operator => {
    if (buttonName === operator) {
      total = operate(total, next, buttonName);
      next = total;
      operation = buttonName;
    }
  });

  return { total, next, operation };
}
