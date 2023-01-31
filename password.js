let input = process.argv.slice(2)[0];
console.log(input);
let obfuscate = function(input){
  let output = "";
  for (let letter of input) {
    if (letter === "a") {
      output += '4'
    }   else if (letter === "e"){
      output += '3'
    } else if (letter === "o")  {
      output += '0'
    } else if (letter === "l") {
      output += "1";
    } else output += letter
      ;
    }
 
 return output;
};


console.log(obfuscate(input));