// fibonacci.js

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter an integer: ", (input) => {
  const num = Number(input);

  let a = 0;
  let b = 1;
  let isFibonacci = false;

  while (a <= num) {
    if (a === num) {
      isFibonacci = true;
      break;
    }

    let next = a + b;
    a = b;
    b = next;
  }

  if (isFibonacci) {
    console.log(num + " is a Fibonacci number");
  } else {
    console.log(num + " is not a Fibonacci number");
  }

  rl.close();
});
