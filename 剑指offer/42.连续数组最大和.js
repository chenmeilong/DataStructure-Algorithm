

/**
 * @param {number[]} nums
 * @return {number}
 */

//看完解析自己写的动态规划算法 时间复杂度：O(n) 空间复杂度为1
var maxSubArray = function(nums) {
    if(nums==null ||nums.length==1) return nums
    let pre = nums[0]
    let max = pre
    for(let i=1 ; i<nums.length ; i++){
        pre = Math.max(pre+nums[i],nums[i])
        max = Math.max(max,pre)
    }
    return max
};


//分治算法  没学会
// var maxSubArray = function(nums) {
// };



console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))