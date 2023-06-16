// 六种解法
// 法一暴力 indexof
// var findDuplicate = function(nums) {
//     for(let i=0;i<nums.length;i++){
//         if(nums.indexOf(nums[i])!==nums.lastIndexOf(nums[i])) return nums[i]
//     }
// };

// 法二 set
// var findDuplicate = function(nums) {
//     let set = new Set()
//     for(let i=0; i<nums.length; i++){
//         if(set.has(nums[i])) return nums[i]
//         else set.add(nums[i])
//     }
// };

//法三 原地哈希
// var findDuplicate = function(nums) {
//     let i = 0
//     while(i<nums.length){
//         if(i!==nums[i]-1 && nums[i] === nums[nums[i]-1]){
//             return nums[i]
//         }
//         if(nums[i]===i+1){
//             i++
//         }else{
//             let swap = nums[i]
//             nums[i] = nums[nums[i]-1]
//             nums[swap-1] = swap
//         }
//     }
// };

// 法四 二分查找
// var findDuplicate = function(nums) {
//     let left = 1
//     let right = nums.length-1
//     while(left < right){
//         let mid = (left+right)>>1
//         let count = 0
//         for(let i=0; i<nums.length;i++){
//             if(nums[i]<=mid){
//                 count++
//             }
//         }
//         if(count<=mid){
//             left = mid+1
//         }else{
//             right = mid
//         }
//     }
//     return left
// };

// 法五 二进制
// var findDuplicate = function(nums) {
//     let bits = 0
//     let n = nums.length-1
//     let result = 0
//     while(n>0){
//         bits++
//         n>>=1
//     }
//     for(let i=0;i<bits;i++){
//         let x = 0
//         let y = 0
//         for(let j=0;j<nums.length;j++){
//             if(nums[j] & (1<<i)) x++
//             if(j>0 && (j & (1<<i))) y++
//         }
//         if(x>y){
//             result+=1<<i
//         }
//     }
//     return result
// };

// 法六 快慢指针 转换成找环的入口
var findDuplicate = function(nums) {
    let fast = 0
    let slow = 0
    while(1){
        fast = nums[nums[fast]]
        slow = nums[slow]
        if(fast === slow){
            slow = 0
            while(fast !== slow){
                fast = nums[fast]
                slow = nums[slow]
            }
            return fast
        }
    }
};



console.log(findDuplicate([1,3,4,2,2])); 
console.log(findDuplicate([2,2,2,2,2])); 