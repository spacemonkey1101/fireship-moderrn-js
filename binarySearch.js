function binarySearch(arr, key) {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    const mid = Math.floor((s + e) / 2);
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

function binarySearch2(arr, target, start = 0, end = arr.length - 1) {
  if (start > end) {
    return -1;
  }

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return mid;
  }

  if (arr[mid] > target) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }

  return binarySearch(arr, target, start, end);
}

const arr = [1, 2, 4, 7];
const arr2 = ["a", "c", "d", "f"];
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr2, "d"));
console.log(binarySearch2(arr, 7));
console.log(binarySearch2(arr2, "f"));
