const INPUT_FILE =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt");

const inputs = require("fs")
  .readFileSync(INPUT_FILE)
  .toString()
  .trim()
  .split("\n");

const numbers = inputs[1].split("").map(Number);
const sum = numbers.reduce((prev, cur) => prev + cur, 0);

console.log(sum);
