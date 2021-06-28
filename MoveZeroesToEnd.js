function moveZeroesToEnd(arr) {
  let count = 0;
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    if (arr[i] > 0) {
      arr[count++] = arr[i];
    }
  }

  while (count < len) {
    arr[count++] = 0;
  }

  return arr;
}

const nums = [1, 1, 0, 1, 0, 0, 1];

console.log(moveZeroesToEnd(nums));
