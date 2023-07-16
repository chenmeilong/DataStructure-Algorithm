// 这是NP完全问题，
// 回溯 暴力 必然超时 时间复杂度是n*2^n

// DP 转换成1-N背包问题,nums的和的一半必须是整数，且一旦有和为nums和的一半那就说明可分割
// 原始程序
// var canPartition = function(nums) {
//     let sum = nums.reduce((sum,num)=>sum+=num,0)
//     if(sum%2) return false
//     sum >>=1
//     nums.unshift(0)
//     let dp = new Array(nums.length).fill(0).map(()=>new Array(sum+1).fill(false))
//     for(let i=1;i<nums.length;i++){
//         for(let j=0;j<=sum;j++){
//             //分情况 包含与不包含nums[i] 
//             // 1.不选择nums[i]:dp[i][j]=dp[i-1][j];
//             // 2.选择nums[i]:
//             //     nums[i]==j,dp[i][j]true;
//             //     nums[i]<j,dp[i][j]dp[i-1][j-nums[i]]

//             // 这里我合并一起写了
//             if(dp[i-1][j]===true || nums[i]===j) dp[i][j] = true
//             else if(nums[i]<j){
//                 dp[i][j] = dp[i-1][j-nums[i]]
//             }
//         }
//     }
//     return dp[nums.length-1][sum-1]
// };


// 优化改进  时间优化 ，空间优化
// var canPartition = function(nums) {
//     let sum = nums.reduce((sum,num)=>sum+=num,0)
//     if(sum%2) return false  //求和为奇数不可分割
//     sum >>=1
//     if(Math.max(...nums)>sum) return false  //最大值大于 一半 则不可能分割
//     let dp = new Array(sum+1).fill(false)
//     for(let num of nums){
//         for(let j=sum;j>num;j--){  //第二层的循环我们需要从大到小计算,因为从新到达是更新后的值，这样能保证值是之前的值
//             dp[j] = dp[j] || dp[j-num]
//         }
//         dp[num] = true   //更新num位置的值为true  
//         if(dp[sum]===true) return true   //提前返回 因为提前找到了，后面就无需计算
//     }
//     return false
// };

// 还有一种做法是 dp[0] = true， 这很重要
// var canPartition = function(nums) {
//     let sum = nums.reduce((sum,num)=>sum+=num,0)
//     if(sum%2) return false  //求和为奇数不可分割
//     sum >>=1
//     if(Math.max(...nums)>sum) return false  //最大值大于 一半 则不可能分割
//     let dp = new Array(sum+1).fill(false)
//     dp[0] = true
//     for(let num of nums){
//         for(let j=sum;j>=num;j--){  //第二层的循环我们需要从大到小计算,因为从新到达是更新后的值，这样能保证值是之前的值
//             dp[j] = dp[j] || dp[j-num]
//         }
//         if(dp[sum]===true) return true   //提前返回 因为提前找到了，后面就无需计算
//     }
//     return false
// };


// dp[0] = true 没设置，但是转换为另外一种形式考虑了
// var canPartition = function(nums) {
//     let target = nums.reduce(((sum,num)=>sum+num),0)
//     if(target%2!==0) return false
//     target/=2
//     if(Math.max(...nums)>target) return false
//     let dp = new Array(target+1).fill(false)
//     for(let i=0;i<nums.length;i++){
//         for(let j=target;j>=nums[i];j--){
//             dp[j] = dp[j] || j===nums[i] || dp[j-nums[i]]
//         }
//         console.log(dp);
//         if(dp[target]) return true
//     }
//     return false
// };


console.log(canPartition([1,2,5]));