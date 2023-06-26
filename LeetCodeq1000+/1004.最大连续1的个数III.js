// 滑动窗口 虫取法
var longestOnes = function(nums, k) {
    let left = 0
    let right = 0
    let zeroCount = 0
    let result = 0
    while(right < nums.length){
        if(nums[right]===0){
            zeroCount++
        }
        while(zeroCount >k){
            if(nums[left]===0) zeroCount--
            left++
        }
        result = Math.max(result,right-left+1)
        right++
    }
    return result
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2));