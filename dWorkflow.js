/*Write a **node** program that takes in an **unlimited** number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.*/

let cLineArguments = process.argv.slice(2);

let getSumForArgs = function(argumentsArray) {
  let argumentSum = 0;

  for (let item of argumentsArray) {
    let numberItem = Number(item);

    if (Number.isInteger(numberItem)) {
      argumentSum += numberItem;
    }
  }

  return argumentSum;

};

console.log(getSumForArgs(cLineArguments));
