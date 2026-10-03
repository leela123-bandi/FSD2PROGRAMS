// luckyNumber.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter your date of birth (DD/MM/YYYY): ", (dob) => {
  // Remove /, -, or spaces
  const digits = dob.replace(/[^0-9]/g, "");

  let sum = 0;

  // Add all digits
  for (let digit of digits) {
    sum += Number(digit);
  }

  // Reduce to a single digit
  while (sum >= 10) {
    let temp = 0;

    while (sum > 0) {
      temp += sum % 10;
      sum = Math.floor(sum / 10);
    }

    sum = temp;
  }

  console.log("Your lucky number is:", sum);

  rl.close();
});
