/**
 * @param {number} n
 * @return {number[]}
 */ 
// var printNumbers = function(n) {
//     let arr = []
//     for(let i = 1 ; i < Math.pow(10,n); i++){
//         arr.push(i)
//     }
//     return arr
// };


//题目的本意 是用字符串处理大数越界问题   参考答案解法 根据9进位计算
// var printNumbers = function(n) {
//     let arr = []
//     let num = new Array(n).fill(0)

//     let start = n-1
//     let nine = 0
//     dfs(0)
//     function dfs(index){
//         if(index==n){
//             let sliceNum= num.slice(start).join('')
//             if(sliceNum!='0') arr.push(sliceNum)

//             if(n-start==nine) start--
//             return
//         }
//         for(let i = 0 ; i < 10 ; i++){
//             if(i==9) nine++
//             num[index] = i
//             dfs(index+1)
//         }
//         nine--
//     }
//     return arr
// };


//根据1判断位置的解法
var printNumbers = function(n) {
    let arr = []
    let num = new Array(n).fill(0)
    let start = n

    dfs(0)
    function dfs(index){
        if(index==n){
            let sliceNum= num.slice(start).join('')
            if(sliceNum!='') arr.push(sliceNum)
            return
        }
        for(let i = 0 ; i < 10 ; i++){
            if(i==1){
                let flag = true
                for(let j=0;j<index;j++){
                    if(num[j]!=0){
                        flag=false
                    }
                }
                if (flag) start--
            }
            num[index] = i
            dfs(index+1)
        }
    }
    return arr
};



console.log(printNumbers(2))