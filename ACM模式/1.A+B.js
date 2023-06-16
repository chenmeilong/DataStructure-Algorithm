var readline = require('readline')
//创建读取行接口对象
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//监听换行，接受数据  ，不限行数据输入
rl.on('line', function(line){
    var arr = line.split(' ');
    console.log(parseInt(arr[0]) + parseInt(arr[1]));
})