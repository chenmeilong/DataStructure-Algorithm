// var moveZeroes = function(nums) {
//     let left=0  //指向0
//     let right=0 //指向非0
//     while(right<nums.length){
//         if(nums[right]!==0){
//             [nums[left], nums[right]] = [nums[right], nums[left]]
//             left += 1
//         }
//         right += 1
//     }
//     return nums
// };

var moveZeroes = function(nums) {
    let left  //指向0
    let right //指向非0

    for(let i=0;i<nums.length;i++) {
        if(nums[i]===0){
            left = i
            break
        }
    }
    for(let i=left+1;i<nums.length;i++) {
        if(nums[i]!==0){
            right = i
            break
        }
    }

    while(left<right && right<nums.length){
        [nums[left],nums[right]] = [nums[right],nums[left]]
        while(right<nums.length && nums[right]===0){
            right++
        }
        while(left<right && nums[left]){
            left++
        }
    }
    return nums
};
console.log(moveZeroes([4,2,4,0,0,3,0,5,1,0]));