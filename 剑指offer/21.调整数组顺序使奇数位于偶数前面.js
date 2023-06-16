/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let left = 0 
    let right = nums.length-1
    while(left<right){
        if(nums[left]%2!=1 && nums[right]%2!=0){
            [nums[left],nums[right]] = [nums[right],nums[left]]
            left++
            right--
        }
        if(nums[left]%2==1) left++
        if(nums[right]%2==0) right--
    }
    return nums
};

// console.log(exchange([1,2,3,4]))
console.log(exchange([11,9,3,7,16,4,2,0]))