// 双向遍历 可优化成两次for循环  ，这里我为了更好地理解使用三次for循环
// var increasingTriplet = function(nums) {
//     let n = nums.length
//     let minArr  = new Array(n).fill(Infinity)
//     let maxArr  = new Array(n).fill(-Infinity)
//     let min = Infinity
//     let max = -Infinity
//     for(let i=1;i<nums.length;i++){
//         min = Math.min(min,nums[i-1])
//         minArr[i] = min
//     }
//     for(let i=nums.length-2;i>=0;i--){
//         max = Math.max(max,nums[i+1])
//         maxArr[i] = max
//     }
//     for(let i=1;i<nums.length;i++){
//         if(nums[i]>minArr[i] && nums[i]<maxArr[i]){
//             return true
//         }
//     }
//     return false
// };


// 贪心
// 赋初始值的时候，已经满足second > first了，现在找第三个数third
// (1) 如果third比second大，那就是找到了，直接返回true
// (2) 如果third比second小，但是比first大，那就把second指向third，然后继续遍历找third
// (3) 如果third比first还小，那就把first指向third，然后继续遍历找third（这样的话first会跑到second的后边，但是不要紧，因为在second的前边，老first还是满足的）
var increasingTriplet = function(nums) {
    const n = nums.length;
    if (n < 3) {
        return false;
    }

    let first = nums[0], second = Number.MAX_VALUE;
    for (let i = 1; i < n; i++) {
        const num = nums[i];
        if (num > second) {
            return true;
        } else if (num > first) {
            second = num;
        } else {
            first = num;
        }
    }
    return false;
};

console.log(increasingTriplet([20,100,10,12,5,13]));