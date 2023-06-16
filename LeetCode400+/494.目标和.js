// 回溯 计算量大
// var findTargetSumWays = function(nums, target) {
//     let count = 0
//     digui(0,0) 
//     return count
//     function digui(sum,index){
//         if(index===nums.length){
//             if(sum===target) count++
//             return null
//         }
//         digui(sum+nums[index],index+1)
//         digui(sum-nums[index],index+1)
//     }
// };

// DP  注意记录的表达式等于j的数目
var findTargetSumWays = function(nums, target) {
    let sum = nums.reduce((sum,num)=>sum+=num,0)
    let n = sum*2+1
    let dp = new Array(n).fill(0)
    let dpbuff = new Array(n).fill(0)
    dp[sum] = 1 //初始化为1
    for(let num of nums){
        dp.forEach((num,index)=>{
            if(dp[index]!==dpbuff[index]) dpbuff[index] = dp[index]
        })
        for(let j=0; j<n;j++){
            dp[j] = (j-num>=0?dpbuff[j-num]:0) + (j+num<n?dpbuff[j+num]:0)
        }
        // console.log(dp);
    }
    return dp[sum+target]===undefined?0:dp[sum+target]     
};

// console.log(findTargetSumWays([1,1,1,1,1],3));
console.log(findTargetSumWays([1],1));