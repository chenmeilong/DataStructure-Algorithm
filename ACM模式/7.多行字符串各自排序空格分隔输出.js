//node.js
// 多个测试用例，每个测试用例一行。
// 每行通过空格隔开，有n个字符，n＜100


// output
// 对于每组测试用例，输出一行排序过的字符串，每个字符串通过空格隔开

//node.js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function(line) {
    let str = line.split(' ').sort().join(' ');
    console.log(str); 
})
