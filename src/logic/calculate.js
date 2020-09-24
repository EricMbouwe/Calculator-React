import operate from './operate'

export default function calculate(calcData, buttonName) {
  let { total, next, operation } = calcData;

  if (buttonName === '+/-') {
    total = operate(next, total, buttonName)
    next *= -1;
    operation = buttonName;
  }

  return { total, next, operation };
}
