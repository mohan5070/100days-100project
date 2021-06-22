const className = "---branch----clAss-nAmE---";

function capitalizeWord(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function remvoeDashes(str) {
  const strArr = str.toLowerCase().split("-");
  let isFirstLetter = true;
  const resultArr = [];

  for (let word of strArr) {
    if (isFirstLetter && word) {
      resultArr.push(word);
      isFirstLetter = false;
    } else {
      resultArr.push(capitalizeWord(word));
    }
  }

  return resultArr.join("");
}

console.log(remvoeDashes(className));
