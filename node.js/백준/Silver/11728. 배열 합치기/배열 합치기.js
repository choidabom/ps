const INPUT_FILE =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt");

const input = require("fs")
  .readFileSync(INPUT_FILE)
  .toString()
  .trim()
  .split("\n");

const a = input[1].split(" ").map(Number);
const b = input[2].split(" ").map(Number);

console.log(
  a
    .concat(b)
    .sort((x, y) => x - y)
    .join(" ")
);
