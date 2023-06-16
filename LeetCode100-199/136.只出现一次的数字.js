/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let target = 0
    for(let num of nums){
        target^=num
    }
    return target
};