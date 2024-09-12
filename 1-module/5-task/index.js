//Если делать конкретно под проверку.
// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//     return str.slice(0, maxlength - 1) + "…";
//   } else {
//     return str;
//   }
// }

//В данном случае мы всегда получим корректный вариант, т.к. отнимаем от макс. длины - текущую длину и после  (-1 от текущей длины)

function truncate(str, maxlength) {
  let correctLength = maxlength - str.length;
  if (str.length > maxlength) {
    return str.slice(0, correctLength - 1) + "…";
  } else {
    return str;
  }
}
