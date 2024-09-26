const INPUT_FILE =
  process.platform === "linux"
    ? "/dev/stdin"
    : require("path").join(__dirname, "input.txt");

let input = Number(require("fs").readFileSync(INPUT_FILE).toString().trim());

let i = 2;
while (i <= input) {
  if (input % i === 0) {
    input /= i;
    console.log(i);
  } else if (input % i !== 0) {
    i++;
  }
}
