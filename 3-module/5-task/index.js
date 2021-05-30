function getMinMax(str) {
  let arr = str.split(/[ ,]+/);
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let num = +arr[i];
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return { min: min, max: max };
}
