/**
 * @param {number} n
 * @return {number}
 */

//法一 动态规划
// var cuttingRope = function(n) {
//     let dp = new Array(n+1).fill(0)
//     for(let i = 2 ; i< n+1 ; i++){
//         for(let j = 1 ; j < i ; j++){
//             dp[i] = Math.max( j*(i-j),j*dp[i-j],dp[i])  //
//         }
//     }
//     // console.log(dp)
//     return dp[n]
// };


//自己写的动态规划
// var cuttingRope = function(n) {
//     let dp = [0,1,1,2,4,6,9]
//     for(let i = 7; i<=n; i++){
//         let max = Math.max(dp[i-3]*3,dp[i-2]*2)
//         dp[i] = max%(Math.pow(10,9)+7)
//     }
//     return dp[n]
// };

//法二 数学经验法   可以归纳为有3取3，没3取2，余1取一个三变两二    还可以不用while循环直接取余计算
var cuttingRope = function(n) {
    if(n<4) return n-1
    let num=1
    while(n>0){
        if(n==1){
            num = num/3*2*2
        }else if(n==2){
            num*=2
        }else{
            num*=3
        }
        n-=3
    }
    return num
};



console.log(cuttingRope(10))