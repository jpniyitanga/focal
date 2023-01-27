

// use slice method to remove the first two default arguments
const args = process.argv.slice(2);
// Initialize a variable sum
let sum = 0;
//Loop through the arguments, convert them to numbers and add them together
for (let i = 0; i < args.length; i++) {
  sum = sum + Number(args[i]);  
}

console.log(sum)








