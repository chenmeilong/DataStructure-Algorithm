
// 在排序数组中查找数字出现的次数


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 法一 笨方法遍历  O(N)
// var search = function(nums, target) {
//     let count = 0
//     nums.forEach(value=>{
//         if(value === target){
//             count++
//         }
//     })
//     return count
// };

//法二  二分查找到目标 再前后遍历   时间复杂度为 O(log(n))
// var search = function(nums, target) {
//     //初始化左右寻找边界
//     let i = 0
//     let j = nums.length-1
//     let count = 0
//     while(i<=j){
//         let m =  Math.floor((i+j)/2)
//         if (nums[m] === target){
//             //左右计算次数
//             count = 1
//             let buff = m
//             while(nums[++buff]===target){
//                 count++
//             }
//             buff = m
//             while(nums[--buff]===target){
//                 count++
//             }
//             return count
//         }
//         else if(nums[m] > target){j=m-1}
//         else if(nums[m] < target){i=m+1}
//     }
//     return count
// };




//法三  两次二分查找后，找到左边界和右边界，再计算
var search = function(nums, target) {
    let i=0
    let j = nums.length-1

    //计算左边界
    let left
    while(i<=j){
        let m = Math.floor((i+j)/2)
        if(nums[m] > target){
            j =  m - 1
        }else if(nums[m] < target){
            i =  m+1
        }else{
            j = m - 1
            left = m
        }
    }
    //计算右边界
    let right
    i=0
    j = nums.length-1
    while(i<=j){
        let m = Math.floor((i+j)/2)
        if(nums[m] > target){
            j =  m - 1
        }else if(nums[m] < target){
            i =  m+1
        }else{
            i = m + 1
            right = m
        }
    }
    return right-left+1 || 0
};


console.log(search([0,1,2,5,5,5,7,9],5))
