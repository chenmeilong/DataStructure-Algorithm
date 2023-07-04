var removeDuplicates = function(nums) {
    let left = 0
    let right = 0
    while(right<nums.length){
        let sameCount = 1
        while(nums[right]===nums[right+1]){
            sameCount++
            right++
        }
        nums[left] = nums[right] 
        left++
        if(sameCount>1){
            nums[left] = nums[right] 
            left++
        }
        right++
    }
    // console.log(nums);
    return left
};

console.log(removeDuplicates([1,1,1,2,2,3]));