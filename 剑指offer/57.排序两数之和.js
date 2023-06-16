/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//法一双层循环  速度太慢O(n^2)  超時
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0 ; j < nums.length; j++) {
            if(i!=j && nums[i]+nums[j] == target){
                return [nums[i],nums[j]]
            }
        }
    }
    return null
};

//法二 哈希map  O（n）
// var twoSum = function(nums, target) {
//     let set = new Set()
//     for(let i = 0; i < nums.length; i++) {
//         set.add(target-nums[i])
//     }
//     for(let i = 0; i < nums.length; i++) {
//         if(set.has(nums[i])){
//             return [nums[i],target-nums[i]]
//         }
//     }
//     return null
// };


//法三双指针 很快  最差O（n）
// var twoSum = function(nums, target) {
//     let left =0
//     let right = nums.length-1
//     while(left < right){
//         if(nums[left] + nums[right] < target){
//             left++
//         }else if(nums[left] + nums[right] > target){
//             right--
//         }else{
//             return [nums[left],nums[right]]
//         }
//     }
// };



console.log(twoSum([2,7,11,15],9))