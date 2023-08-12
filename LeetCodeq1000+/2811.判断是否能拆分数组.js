var canSplitArray = function(nums, m) {
    if(nums.length<=2) return true
    for(let i=0;i<nums.length-1;i++){
        if( nums[i]+nums[i+1]>=m) return true
    }
    return false
};