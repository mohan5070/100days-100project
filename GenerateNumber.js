const rand = (max) => Math.floor(Math.random() * max);
const betweenNumbers = (min, max) => rand(max - min) + min;

const checkNumbers = (min, max) => console.log(betweenNumbers(min, max));
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  checkNumbers(1, 10);
});
