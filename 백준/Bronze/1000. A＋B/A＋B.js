var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(+input[0] + +input[1])