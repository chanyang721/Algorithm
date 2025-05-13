const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    [a, b] = line.split(' ').map(e => Number(e));
}).on('close', function () {
    console.log(`${a} + ${b} = ${a + b}`)
});