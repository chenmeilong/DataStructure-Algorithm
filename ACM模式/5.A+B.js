//node.js
// 输入
// 输入的第一行包括一个正整数t(1 <= t <= 100), 表示数据组数。
// 接下来t行, 每行一组数据。
// 每行的第一个整数为整数的个数n(1 <= n <= 100)。
// 接下来n个正整数, 即需要求和的每个正整数。
//node.js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let t = 0;
rl.on('line', function(line) {
    if(t === 0) t = parseInt(line);
    else {
        let arr = line.split(' ').map(Number);
        console.log(arr.slice(1).reduce((sum, cur) => sum + cur));
    }
})
