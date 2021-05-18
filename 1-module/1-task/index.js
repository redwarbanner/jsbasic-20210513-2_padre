function factorial(n) {
  let val = 1;
  for (let i = 2; i <= n; i++) {
    val *= i;
  }
  return val;
}
