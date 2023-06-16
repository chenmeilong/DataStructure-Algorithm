var rob = function(nums) {
    if(nums.length===1) return nums[0]
    let dp = new Array(nums.length)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0],nums[1])
    for(let i=2; i<nums.length;i++){
        dp[i] = Math.max(dp[i-1],dp[i-2]+nums[i])  //转化为偷不偷最后这间房来讨论出最大值
    }
    // console.log(dp);
    return dp[nums.length-1]
};

//空间优化
// var rob = function(nums) {
//     if(nums.length===1) return nums[0]
//     let a = nums[0]
//     let b = Math.max(nums[0],nums[1])
//     let c
//     for(let i=2; i<nums.length;i++){
//         c = Math.max(b,a+nums[i])  //转化为偷不偷最后这间房来讨论出最大值
//         a = b
//         b = c
//     }
//     // console.log(dp);
//     return b
// };

// console.log(rob([1,2,3,1]));
// console.log(rob([2,1,1,2]));
console.log(rob([1,3,1,3,100]));