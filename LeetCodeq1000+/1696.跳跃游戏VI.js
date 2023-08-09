

// DP 会超时  因为找出最大值浪费了大量时间
// 维护一个单调栈  单调减,存放的index
var maxResult = function(nums, k) {
    let dp = []
    let stack = []
    dp.push(nums[0])
    stack.push(0)
    for(let i=1;i<k;i++){
        dp.push(dp[stack[0]]+nums[i])
        while(dp[dp.length-1]>=dp[stack[stack.length-1]]){
            stack.pop()
        }
        stack.push(dp.length-1)
    }
    for(let i=k;i<nums.length;i++){
        dp.push(dp[stack[0]]+nums[i])
        while(dp[dp.length-1]>=dp[stack[stack.length-1]]){
            stack.pop()
        }
        stack.push(dp.length-1)

        // 判断第一个 栈顶元素是否需要移除
        if(stack[0]<=i-k){
            stack.shift()
        }
    }
    return dp[nums.length-1]
};

console.log(maxResult([1,-1,-2,4,-7,3],2));