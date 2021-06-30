function add(n) {
  function addNext(x) {
    return add(n + x);
  }

  addNext.valueOf = function () {
    return n;
  };

  return addNext;
}

console.log(Number(add(1)(2)(3)) == 6);
console.log(Number(add(1)(2)(3)(4)) === 10);
