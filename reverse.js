// reverseWords.js

const sentence = "Hello World from NodeJS";

const result = sentence
  .split(" ")
  .map(word => word.split("").reverse().join(""))
  .join(" ");

console.log("Original:", sentence);
console.log("Reversed:", result);
