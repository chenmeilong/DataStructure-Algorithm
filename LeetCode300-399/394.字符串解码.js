// 递归 自己写的 根据左括号右括号递归
var decodeString = function(s) {
    return digui(0)[0]

    function digui(start){  //递归参数为[+1的位置  后面的值
        let result = ''
        let num = 0
        let str = ''
        let left = 1  //就算左边括号数量
        while(start < s.length){
            if(+s[start]>=0 && +s[start]<=9){
                num = num * 10 + +s[start]
            }else if(s[start]==='['){
                [str,start] = digui(start+1)
                left++
            }else if(s[start]===']'){
                while(num--) result+= str
                num = 0
                str = ''
                left--
                if(left===0) break
            }else{
                if(num) str += s[start]
                else result += s[start]
            }
            start++
        }
        return [result,start-1]    // 返回]位置  并返回 括号内拼接完成的字符串
    }
};

// console.log(decodeString('q3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));