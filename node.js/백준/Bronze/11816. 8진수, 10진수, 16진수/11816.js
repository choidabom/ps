const INPUT_FILE =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt");

const input = require("fs")
  .readFileSync(INPUT_FILE)
  .toString()
  .trim()
  .split("");

const hexMap = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
};

let answer = 0;
if (input[1] === "x") {
  // 16진수
  const number = input.splice(2).reverse();
  for (let i = 0; i < number.length; i++) {
    if (hexMap.hasOwnProperty(number[i])) {
      number[i] = hexMap[number[i]];
    }
    answer += Math.pow(16, i) * number[i];
  }
  console.log(answer);
} else {
  if (input[0] === "0") {
    // 8진수
    const number = input.splice(1).reverse();
    for (let i = 0; i < number.length; i++) {
      answer += Math.pow(8, i) * +number[i];
    }
    console.log(answer);
  } else {
    // 10진수
    console.log(Number(input.join("")));
  }
}
