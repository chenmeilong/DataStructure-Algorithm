/**
 * @param {number} n - a positive integer
 * @return {number}
 */

//自己写的
// var hammingWeight = function(n) {
//     let count = 0   //记录1的个数
//     while(n>0){
//         if(n%2==1) count++
//         n = Math.floor(n/2)
//     }
//     return count
// };


//循环二进制位移 
// var hammingWeight = function(n) {
//     let count = 0   //记录1的个数
//     for(let i = 0 ; i<32 ; i++){
//         if((n & 1<<i) !==0) count++
//     }
//     return count
// };

//最佳解法 根据巧妙的办法 时间复杂度logn
var hammingWeight = function(n) {
    let count = 0   //记录1的个数
    while(n){
        n &= n-1
        count++
    }
    return count
};



console.log(hammingWeight(11))