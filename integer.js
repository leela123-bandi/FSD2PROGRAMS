// primePalindrome.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to check prime number
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Function to check palindrome
function isPalindrome(num) {
  const str = num.toString();
  return str === str.split("").reverse().join("");
}

// Function to find next palindrome
function nextPalindrome(num) {
  let next = num + 1;

  while (!isPalindrome(next)) {
    next++;
  }

  return next;
}

// Read input
rl.question("Enter a positive integer: ", (input) => {
  const num = Number(input);

  if (isPrime(num)) {
    console.log("The number is prime.");
    console.log("Next palindrome:", nextPalindrome(num));
  } else {
    console.log("Not prime");
  }

  rl.close();
});
