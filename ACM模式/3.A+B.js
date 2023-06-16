//node.js
// 输入包括两个正整数a,b(1 <= a, b <= 10^9),输入数据有多组, 如果输入为0 0则结束输入
let readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line){
    let [x, y] = line.split(' ').map(Number);  //Number是一个构造函数
    if(x === 0 && y === 0) return;
    console.log(x + y);
})
