/**
 * @param {number[]} nums
 * @return {number}
 */

//找出只出现一次的数字
// 法一 哈希字典 复杂度O(n)
// var singleNumber = function(nums) {
//     let map = new Map()
//     nums.forEach(num =>{
//         if(!map.has(num)){
//             map.set(num,1)
//         }else{
//             let index = map.get(num)
//             map.set(num,++index)
//         }
//     })

//     for  (let i of map.keys()){
//         if(map.get(i)==1) return i
//     }
//     return null
// };

//法二 位运算  最佳解法  有限状态自动机
//把数组中所有数字的二进制表示的每一位加起来，如果某一位的和可以被 3 整除，那么那个只出现一次的数字二进制表示中对应的那一位是 0，否则是 1
var singleNumber = function(nums) {
    let ones = 0
    let twos = 0
    for (let num of nums){
        // console.log(ones ^ num)
        ones = ones ^ num & ~twos  //注意是先按位与后异或
        twos = twos ^ num & ~ones  //注意是新one的基础上算two
        // console.log(ones,twos)
    }
    return ones
};


// var singleNumber = function(nums) {
//     //记录32位的数据
//     let countList = new Array(32).fill(0)
//     nums.forEach(num =>{
//         for(let i=0;i<32;i++){
//             countList[i] +=  num&1
//             num>>=1
//         }
//     })
//     let res = 0
//     for(let i=31;i>=0;i--){
//         res<<=1
//         res |= countList[i]%3   //依次恢复每一位
//     }
//     return res
// };

console.log(singleNumber([3,4,3,3]))