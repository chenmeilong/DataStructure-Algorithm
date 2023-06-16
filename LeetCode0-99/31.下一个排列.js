/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length-1
    while(i>0 && nums[i-1]>=nums[i]){
        i--
    }
    let j = nums.length-1
    if(i){
        i--
        while(i<j && nums[i]>=nums[j]){
            j--
        }
        [nums[i],nums[j]] = [nums[j],nums[i]]
        i ++
    }
   
    let right = nums.length-1
    while(i<right){
        [nums[i],nums[right]] = [nums[right],nums[i]]
        i++
        right--
    }
    return nums
}; 


console.log(nextPermutation([9,8,7,6,5]));
// console.log(nextPermutation([5,1,1]));
