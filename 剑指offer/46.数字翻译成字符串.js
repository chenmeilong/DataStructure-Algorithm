/**
 * @param {number} num
 * @return {number}
 */

//动态规划时间空间都是O（n）
var translateNum = function(num) {
    stringNum = num.toString()
    if(stringNum.length==1) return 1
    let a=1
    let b = 1
    let c
    //动态规划需要找规律一步一步推导，但是前面几项需要自己算
    for(let i=1; i<stringNum.length; i++){
        let buff =parseInt(stringNum[i-1]+stringNum[i])
        if(buff<26 && buff>9){
            c = a+b
        }else{
            c = b
        }
        a = b
        b = c
    }
    return b
};

//时间O(n) 空间O（1）的动态规划
// var translateNum = function(num) {
//     if(num<10) return 1
//     if(num<26) return 2
//     if (num<99) return 1
//     let a = 1
//     let b = 1
//     let c
//     let num0
//     let num1

//     while(num>9){
//         num0 = num%10
//         num = Math.floor(num/10)
//         num1 = num%10
//         if(num1*10+num0>9 && num1*10+num0<26){
//             c = a + b
//         }else c = b
//         a = b
//         b = c
//     }
//     return b
// };

console.log(translateNum(12258))
console.log(translateNum(18822))


