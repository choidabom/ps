const INPUT_FILE =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt");

const input = require("fs")
  .readFileSync(INPUT_FILE)
  .toString()
  .trim()
  .split("\n");

const string = input[1];

let arr = [];

for (let i = 0; i < string.length; i++) {
  if (string[i] / 1 >= 0) {
    arr.push(string[i]);
  } else {
    arr.push("+");
  }
}

console.log(
  arr
    .join("")
    .split("+")
    .map(Number)
    .reduce((prev, cur) => prev + cur, 0)
);
