//let nums = [100 ...200]

for (let num = 100; num <= 200; num++) {
  let output = "";
  
  if (num % 3 === 0) {
    output += "Loopy";
  }

  if (num % 4 === 0) {
    output += "Lighthouse";
  }
  console.log(output === "" ? num : output);
}