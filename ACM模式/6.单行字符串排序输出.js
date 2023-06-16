//node.js
// 输入有两行，第一行n
// 第二行是n个字符串，字符串之间用空格隔开
// 输出一行排序后的字符串，空格隔开，无结尾空格
//node.js
//node.js
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let n = 0;
rl.on('line', function(line) {
    if(n === 0) n = parseInt(line);
    else {
        let str = line.split(' ').sort().join(' ');
        console.log(str);
    }
    
})
