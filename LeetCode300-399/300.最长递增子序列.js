
// var lengthOfLIS = function(nums) {
//     let dp = []
//     for(let i=0;i<nums.length;i++){
//         dp.push(1)
//         for(let j=0;j<i;j++){
//             if(nums[j]<nums[i]){
//                 dp[i] = Math.max(dp[i],dp[j]+1)
//             }
//         }
//     }
//     return Math.max(...dp)
// }; 
// 法二 贪心 + 二分查找
// https://leetcode.cn/problems/longest-increasing-subsequence/solutions/1033432/dong-tai-gui-hua-he-er-fen-cha-zhao-lian-x7dh/
var lengthOfLIS = function(nums) {
    // 存放每组排的栈顶元素
    let top = []
    for(let i=0;i<nums.length;i++){
        let left = 0
        let right = top.length-1
        // 越界 则重新添加分组
        if(nums[i]>top[top.length-1]){
            top.push(nums[i])
            continue
        }
        while(left<right){
            let mid = (left+right)>>1
            if(top[mid] >= nums[i]){
                right = mid
            }else{
                left = mid+1
            }
        }
        top[left]=nums[i]
    }
    return top.length
}; 


console.log(lengthOfLIS([0,1,0,3,2,3]));