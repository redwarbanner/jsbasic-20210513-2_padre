function checkSpam(str) {
  str = str.toLowerCase();
  return str.includes("1xbet") || str.includes("xxx");
}

/* Напишите функцию checkSpam(str), возвращающую true, если str содержит '1xBet' или 'XXX', а иначе false.

Функция должна быть нечувствительна к регистру:

checkSpam('1XbeT now') === true
checkSpam('free xxxxx') === true
checkSpam('innocent rabbit') === false
*/
