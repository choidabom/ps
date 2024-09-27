const INPUT_FILE =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt");

const [a, b] = require("fs")
  .readFileSync(INPUT_FILE)
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((x) => x.split(" ").map(Number));

console.log(
  a
    .concat(b)
    .sort((x, y) => x - y)
    .join(" ")
);
