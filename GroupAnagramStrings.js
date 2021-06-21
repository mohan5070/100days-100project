const items = ["dog", "god", "cat", "tac", "ogd", "emil"];

function GroupAnagrams(arr) {
  const anagrams = {};
  const collectedAnagrams = [];

  for (let word of arr) {
    const letters = word.split("").sort().join();
    anagrams[letters] = anagrams[letters] || [];
    anagrams[letters].push(word);
  }

  for (let key in anagrams) {
    collectedAnagrams.push(anagrams[key]);
  }

  return collectedAnagrams;
}

console.log(GroupAnagrams(items));
