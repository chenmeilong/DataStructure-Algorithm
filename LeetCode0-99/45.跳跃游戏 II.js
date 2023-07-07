
// DP 效率不高
// var jump = function(nums) {
//     let dp = new Array(nums.length).fill(10000)
//     dp[0] = 0
//     for(let i=0;i<nums.length-1;i++){
//         let num = nums[i]
//         while(num){
//             dp[i+num] = Math.min(dp[i+num],dp[i]+1)
//             num--
//         }
//     }
//     return dp[nums.length-1]
// };

// 跳跃记录 每一段的最长记录
var jump = function(nums) {
    let start = 0
    let end = 1
    let res = 0
    while(end<nums.length){
        let maxpos = 0
        for(let i=start;i<end;i++){
            maxpos = Math.max(maxpos,i+nums[i]) 
        }
        start = end
        end = maxpos+1
        res++
    }
    return res
};

console.log(jump([1,2]));