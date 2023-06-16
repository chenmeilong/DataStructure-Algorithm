/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
//答案的解法
// var add = function(a, b) {
//     while(b!=0){
//         let carry = (a&b)<<1
//         a ^= b
//         b = carry
//     }
//     return a
// };

// var add = function(a, b) {
//     if(b===0) return a
//     if(a===0) return b
//     return add(a^b,(a&b)<<1)
// };

//我自己想的解法  a b c  依次计算进位
var add = function(a, b) {
    let c = 0  //表示进位
    let returnNum  =0
    for(let i =0 ; i<32 ;i++){
        let aRight = (a>>i & 1)
        let bRight = (b>>i & 1)
        returnNum = returnNum | ((aRight ^ bRight ^ c)<<i)
        //这里是重点分析进位的地方
        if((aRight&bRight)==1) c=1
        if((aRight|bRight)==0) c=0
    }
    return returnNum
};


console.log(add(1,15))