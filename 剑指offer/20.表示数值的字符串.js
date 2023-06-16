/**
 * @param {string} s
 * @return {boolean}
 */

// 自己想的正则表达式   注意|前后要加括号 不然会出现奇怪的bug
var isNumber = function(s) {
    let pattern =  /^ *[+-]?((\d+)|(\d+\.\d*|\d*\.\d+))([eE][+-]?\d+)? *$/
    return pattern.test(s)
};

//题解  确定有限状态自动机 解法 需要模拟判断

console.log(isNumber('0e'))


