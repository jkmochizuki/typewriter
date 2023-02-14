const sentence = "hello there from lighthouse labs";
let time = 0;

for (const char of sentence) {
  setTimeout(() => {
    console.log(char);
  }, time);
  time += 50;
}

// setTimeout(() => {
//   process.stdout.write("\n"); // if it was printing all chars in the same line
// }, time);