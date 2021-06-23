const gerMaxProfit = (arr) => {
  if (arr.length < 2) {
    throw new Error("not enought data");
  }

  let minPrice = arr[0];
  let maxProfit = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - minPrice > maxProfit) {
      maxProfit = arr[i] - minPrice;
    }

    if (arr[i] < minPrice) {
      minPrice = arr[i];
    }
  }
  return maxProfit;
};

const prices = [1, 3, 1, 8, 18, 10, 0];
console.log(gerMaxProfit(prices));
