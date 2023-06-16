
var lengthOfLIS = function(nums) {
    let dp = []
    for(let i=0;i<nums.length;i++){
        dp.push(1)
        for(let j=0;j<i;j++){
            if(nums[j]<nums[i]){
                dp[i] = Math.max(dp[i],dp[j]+1)
            }
        }
    }
    return Math.max(...dp)
}; 
// 法二 贪心 + 二分查找
console.log(lengthOfLIS([0,1,0,3,2,3]));