/**
 * @param {number[]} nums
 * @return {boolean}
 */
//自己想的找0
// var canJump = function(nums) {
//     if(nums.length===1 && nums[0] === 0) return true
//     let zero = []
//     for(let i = 0 ; i<nums.length;i++){
//         if(nums[i]===0) zero.push(i)
//     }
//     while(zero.length){
//         let index = zero.pop()
//         //判断前面的所有位置能否越过这个0
//         let flag = false //能不能通过的标志
//         let i = index
//         while((--i)>=0){
//             if(nums[i]>index-i) flag = true
//             //排除最后的位置为
//             if(index===nums.length-1 && nums[i]>=index-i) flag = true
//         }
  

//         if(!flag) return false
//     }
//     return true
// };

//核心思想其实是动态规划，dp[i]记录nums[i]之前所能到达的最远距离，dp[i] = max(dp[i-1], i + nums[i])，空间优化可以将dp[i]变为dp，dp就是题解中的max
// var canJump = function(nums) {
//     let max = 0
//     for(let i = 0 ; i <nums.length;i++){
//         if(i>max) return false
//         max = Math.max(max,i+nums[i])
//     }
//     return true
// };

//倒推法 速度最快 空间最低
var canJump = function(nums) {
    let last = nums.length-1
    for(let i = last-1 ; i >=0;i--){
        if(i+nums[i]>=last) last = i
    }
    return last==0
};


console.log(canJump([3,2,1,0,4]));
console.log(canJump([0]));
console.log(canJump([2,0,0]));