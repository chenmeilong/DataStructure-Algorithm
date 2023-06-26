// 暴力法改进后为 n^2
// var subarraySum = function(nums, k) {
//     let count =0
//     for(let j=0; j<nums.length;j++){  //以j为结尾的
//         let sum = 0
//         for(let i=j;i>=0;i--){     //i开始 注意开始法位置 因为
//             sum+=nums[i]
//             if(sum===k) count++
//         }
//     }
//     return count
// };

// 前缀和+哈希优化  其实就是转成前缀和数组，再求两数之差为k，注意顺序
var subarraySum = function(nums, k) {
    let map = new Map([[0,1]])
    let preSum = 0
    let count = 0
    for(let num of nums){
        preSum+=num
        if(map.has(preSum-k)){
            count+=map.get(preSum-k)
        }
        map.set(preSum,(map.get(preSum) || 0) +1)
    }
    return count
};

console.log(subarraySum([1,1,1],2));