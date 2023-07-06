var rotate = function(nums, k) {
    nums.reverse()
    let len = k%nums.length
    for(let i=0;i<len>>1;i++){
        let swap = nums[i]
        nums[i] = nums[len-i-1]
        nums[len-i-1] = swap
    }
    for(let i=len;i<(nums.length+len)>>1;i++){
        let swap = nums[i]
        nums[i] = nums[nums.length-1-i+len]
        nums[nums.length-1-i+len] = swap
    }
    return nums
};


console.log(rotate(nums = [1,2,3,4,5,6,7], k = 3));