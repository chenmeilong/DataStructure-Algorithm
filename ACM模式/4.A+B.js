//node.js
// 输入
// 输入数据包括多组。
// 每组数据一行,每行的第一个整数为整数的个数n(1 <= n <= 100), n为0的时候结束输入。
// 接下来n个正整数,即需要求和的每个正整数。
//node.js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line) {
    let arr = line.split(' ').map(Number);
    if(arr[0] === 0) return;
    console.log(arr.slice(1).reduce((sum, cur) => sum + cur));
})
