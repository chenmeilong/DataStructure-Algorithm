// 使用二分法 ，比较巧妙
var findPeakElement = function(nums) {
    let left = 0
    let right =nums.length-1
    while(left<right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]>nums[mid+1]){
            // 左边一定有峰顶(包含当前值)
            right  = mid
        }else{
            // 右边一定有峰顶（不包含当前值）
            left = mid + 1
        }
    } 
    return left
};


console.log(findPeakElement([1,2,1,3,5,6,4]));