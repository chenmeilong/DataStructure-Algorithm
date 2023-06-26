// var longestSubarray = function(nums) {
//     let count = 0
//     let max =0 
//     let left = 0
//     let right = 0
//     // 计算0左右1的个数求出最长的1
//     for(let i=0;i<=nums.length;i++){
//        if(i===nums.length || nums[i]===0){
//            if(count) right= count
//            else right = 0
//            max = count===nums.length ? count-1:Math.max(max,left+right)
//            left = right
//            count = 0
//        }else{
//            count++
//        }
//     }
//     return max 
// };

// 滑动窗口
var longestSubarray = function(nums) {
    let left = 0
    let right = 0
    let zeroCount = 0
    let result = 0
    while(right < nums.length){
        if(nums[right]===0){
            zeroCount++
        }
        while(zeroCount>1){
            if(nums[left]===0) zeroCount--
            left++
        }
        result = Math.max(result,right-left)
        right++
    }
    return result
};

// console.log(longestSubarray([1,1,1]));
console.log(longestSubarray([1,1,0,1]));