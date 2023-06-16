/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let result = nums[0]
    let max = nums[0]
    let min = nums[0]
    for(let i=1; i<nums.length;i++){
        let bakMax = max
        let bakMin = min
        max = Math.max(bakMax*nums[i],bakMin*nums[i],nums[i])
        min = Math.min(bakMax*nums[i],bakMin*nums[i],nums[i])
        result = Math.max(result,max)
    }
    return result
};

// console.log(maxProduct([2,3,-2,4]));
// console.log(maxProduct([-2,0,-1]));
console.log(maxProduct([-4,-3,-2]));