export default function operate(numberOne, numberTwo, operation) {
  if (operation === '+') return numberOne + numberTwo;
  if (operation === '-') return numberOne - numberTwo;
  if (operation === '÷') return numberOne / numberTwo;
  if (operation === 'x') return numberOne * numberTwo;
  if (operation === '%') return (numberOne * numberTwo) / 100;
  return 0;
}
