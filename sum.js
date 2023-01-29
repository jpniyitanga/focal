

// use slice method to remove the first two default arguments
const args = process.argv.slice(2);

// Initialize a variable sum
let sum = 0;

// //Loop through the arguments, convert them to numbers and add them together
for (let i = 0; i < args.length; i++) {
  if (Number(args[i])) {
    sum = sum + Number(args[i]);
  }
}

console.log(sum);




// const args = process.argv.slice(2);
// let total = 0;
// args.reduce((total, arg)=>{
//   return total = Number(total) + Number(arg);
// });
// console.log(total);








