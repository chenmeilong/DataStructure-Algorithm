// 法一排序 
// 法二on解决   从左往右，找到比左边最大值还小的最右下标，从右往左，找到比右边最小值还大的最左下标
var findUnsortedSubarray = function(nums) {
    let right = 0
    let left = 1

    let buff = nums[0]
    for(let i=0;i<nums.length;i++){
        buff = Math.max(buff,nums[i])
        if(nums[i]<buff) right = i
    }
    for(let i=nums.length-1;i>=0;i--){
        buff = Math.min(buff,nums[i])
        if(nums[i]>buff) left = i
    }
    return right-left+1
};
console.log(findUnsortedSubarray([2,6,4,8,10,9,15]));
console.log(findUnsortedSubarray([2,1]));