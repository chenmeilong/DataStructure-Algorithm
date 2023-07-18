/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// var threeSum = function(nums) {
//     nums.sort((a,b)=>a-b)
//     let List = []
//     for(let i=0;i<nums.length;i++){
//          // 如果当前值大于 0，和右侧的值再怎么加也不会等于 0，所以直接退出
//         if (nums[i]>0) return List
//         let target = -nums[i]
//         // 当前循环的值和上次循环的一样，就跳过，避免重复值
//         if(nums[i]===nums[i-1]) continue
//         //排序两数之和
//         let left = i+1
//         let right = nums.length-1
//         while(left<right){
//             if(nums[left]+nums[right]>target){
//                 right--
//             }else if(nums[left]+nums[right]<target){
//                 left++
//             }else{
//                 List.push([nums[i],nums[left],nums[right]])
//                 while(left<right && nums[left]===nums[left+1]) left++
//                 while(left<right && nums[right]===nums[right-1]) right--
//                 right--
//                 left++
//             }
//         }
//     }
//     return List
// };


// let arr = [-1,0,1,2,-1,-4]
let arr = [-2,0,0,2,2]
console.log(threeSum(arr));