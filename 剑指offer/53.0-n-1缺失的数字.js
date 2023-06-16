// 0～n-1 中缺失的数字
// 有五种解法，暴力，数学，位运算，哈希表，二分


/**
 * @param {number[]} nums
 * @return {number}
 */

//自己写的笨方法
// var missingNumber = function(nums) {
//     for(let i = 0; i<=nums.length; i++){
//         if(!nums.includes(i)){
//             return i
//         }
//     }
// };


//二分查找  自己想的
// var missingNumber = function(nums) {
//     let i = 0
//     let j = nums.length-1
//     let m

//     while(i<=j){
//         m = Math.floor((i+j)/2)
//         if(nums[m]===m){
//             i = m+1
//         }else{
//             if(nums[m-1]===m-1) break  //找上个的情况
//             j = m -1 
//         }
//     }
//     if(nums[nums.length-1]===m) m++
//     return m
// };


//答案 二分法，和我写的简陋不少，这种问题注意左边界返回值
// var missingNumber = function(nums) {
//     let i = 0
//     let j = nums.length-1
//     let m

//     while(i<=j){
//         m = Math.floor((i+j)/2)
//         if(nums[m]===m) i = m+1
//         else j = m -1 
//     }
//     return i
// };

//数学方法 如果不缺那个数字的话，这个数组的所有数字可以组成一个等差数列，我们只需要根据公式求和，然后再减去数组中所有的数字即可
// var missingNumber = function(nums) {
//     let sum = parseInt((0+nums.length)*(nums.length+1)/2)
//     nums.forEach(value=>sum-=value)
//     return sum
// };

// 位运算   利用异或的交换律
var missingNumber = function(nums) {
    let xor=0
    for(let i=0;i<nums.length;i++){
        xor = xor ^ nums[i] ^ i+1
    }
    return xor
};

// 使用set 集合对象 先一遍循环添加一遍，再一遍循环遍历，但这种办法无论时间还是空间复杂度都提高了
// var missingNumber = function(nums) {
//     let set = new Set(nums)
//     nums.forEach(value=>set.add(value))
//     for(let i=0 ; i<= nums.length; i++){
//         if(!set.has(i)){
//             return i
//         }
//     }
// };




console.log(missingNumber([0,1,2,3,4,5,6]))



