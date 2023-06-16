//时间复杂度要求是o(n), 改进快排可以达到要求
//我们知道快速排序的性能和「划分」出的子数组的长度密切相关。直观地理解如果每次规模为n，每次划分为1和n-1是最差情况，时间为o(n^2),引入随机化来加速这个过程，时间代价期望是o(n)
var findKthLargest = function(nums, k) {
    if(nums.length==1) return nums[0]
    quickSort(0,nums.length-1)
    return nums[k-1]

    function quickSort(left,right){
        if(left>=right) return 
        let key = nums[left]
        let i = left
        let j = right
        while(i<j){
            while(nums[j]<=key && i<j) j--
            while(nums[i]>=key && i<j) i++
            if(i<j) [nums[i],nums[j]] = [nums[j],nums[i]]
        }
        [nums[i],nums[left]] = [nums[left],nums[i]]
        // console.log(i,k);
        if(i+1>k){
            quickSort(left,i-1)
        }else if(i+1<k){
            quickSort(i+1,right)
        }
    }
};

console.log(findKthLargest([3,2,1,5,6,4],2));
// console.log(findKthLargest([2,1],2));