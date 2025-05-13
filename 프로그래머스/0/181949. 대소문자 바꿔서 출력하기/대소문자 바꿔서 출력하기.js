const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let result = "";
    for (const char of str) {
        if(char >= "a" && char <= "z") {
            result += char.toUpperCase();
        }
        else if(char >= "A" && char <= "Z") {
            result += char.toLowerCase();
        }
        else result += "";
    }
    console.log(result);
});