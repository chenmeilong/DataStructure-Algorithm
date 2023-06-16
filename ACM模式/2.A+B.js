//node.js
let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let num = 0;
rl.on('line', function(line) {
    if(num === 0) {
        num = parseInt(line);
    } else {
        let [x, y] = line.split(' ').map(Number);
        console.log(x + y);
    }
});
