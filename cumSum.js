function cumSum(arr) {
  let sum = 0;
  for (const v of arr) {
    sum = sum + v;
  }
  return sum;
}

const arr = [1, 3, 4, 5, 5];

console.log(cumSum(arr));
