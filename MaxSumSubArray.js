function maxSumArray(arr, num) {
  if (arr.length < num) {
    throw new Error("array length is less than given num");
  }

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }

  maxSum = tempSum;

  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSumArray([100, 200], 3));
console.log(maxSumArray([100, 200, 300], 3));
console.log(maxSumArray([100, 200, 300], 2));
console.log(maxSumArray([14, 2, 8, 7], 2));
