export default function calculate(calcData, buttonName) {
  let { total, next, operation } = calcData;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
    operation = buttonName;
  }

  return { total, next, operation };
}
