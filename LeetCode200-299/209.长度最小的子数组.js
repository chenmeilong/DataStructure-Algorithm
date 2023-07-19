

var minSubArrayLen = function(target, nums) {
    let res = Infinity
    // 区间左闭右开
    let left = 0
    let right = 1
    let sum = nums[0]
    while(right<=nums.length){
        if(sum>=target){
            res = Math.min(res,right-left)
            sum-=nums[left]
            left++
        }else{
            sum+=nums[right]
            right++
        }
    }
    return res===Infinity?0:res
};


console.log(minSubArrayLen(7,[2,3,1,2,4,3]));

