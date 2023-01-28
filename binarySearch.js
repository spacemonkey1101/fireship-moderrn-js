function binaryFunction(arr, key) {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    const mid = (s + e) / 2;
    if (arr[mid] == key) {
      return mid;
    } else if (arr[mid] > key) {
      e = mid - 1;
    } else {
      s = mid + 1;
    }
  }
  return -1;
}

console.log(binaryFunction([1,2,4,6,7], 5))