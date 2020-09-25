import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  const minusOne = new Big(-1);
  let result;

  switch (operation) {
    case 'x':
      result = num1.times(num2).toFixed();
      break;
    case '÷':
      try {
        result = num1.div(num2).toFixed();
      } catch (error) {
        result = 'E';
      }
      break;
    case '+':
      result = num1.plus(num2).toFixed();
      break;
    case '-':
      result = num1.minus(num2).toFixed();
      break;
    case '%':
      result = num1.div(100).toFixed();
      break;
    case '+/-':
      result = num1.times(minusOne).toFixed();
      break;
    default:
      result = '0';
      break;
  }

  return result;
}
