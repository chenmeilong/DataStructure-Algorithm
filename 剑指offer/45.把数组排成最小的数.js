/**
 * @param {number[]} nums
 * @return {string}
 */
//数组 排序 joint  冒泡
// var minNumber = function(nums) {
//     for(let i = 0 ; i<nums.length-1 ; i++){
//         for(let j = i+1 ; j < nums.length  ; j++){
//             if(nums[i].toString()+nums[j].toString() > nums[j].toString()+nums[i].toString()){
//                 [nums[i],nums[j]] = [nums[j],nums[i]]
//             }
//         }
//     }
//     return nums.join('')
// };

//快排
// var minNumber = function(nums) {
//     quickSort(nums,0,nums.length-1)
//     return  nums.join('')
// };
// function quickSort(nums,left,right){
//     if (left >= right) return null
//     let key = nums[left]
//     let i = left
//     let j = right

//     while(i<j){
//         while(key.toString()+nums[j].toString() <= nums[j].toString()+ key.toString()  && i<j){
//             j--
//         }
//         while(key.toString()+nums[i].toString() >= nums[i].toString() + key.toString()  && i<j){
//             i++
//         }
//         if(i<j){
//             [nums[i],nums[j]] = [nums[j],nums[i]]
//         }
//     }
//     [nums[i],nums[left]] = [nums[left],nums[i]]
//     quickSort(nums, left,i-1)
//     quickSort(nums, i+1, right)
//     return nums
// }


内置函数
var minNumber = function (nums) {
    return nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join("");
};



console.log(minNumber([3,30,34,5,9]))
// console.log(minNumber([1]))