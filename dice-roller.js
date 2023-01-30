const input = process.argv.slice(2);
let result = "";
for (let i = 0; i < input; i++) {
    let generatedNumber = Math.ceil(Math.random() * 6);  
    result += generatedNumber;
    result += ", ";
  }
  result = result.slice(0, result.length - 2);
  //console.log(result);  






// eslint-disable-next-line no-undef
console.log(`Rolled ${input} dice: ${result} `);






