    /**
     * 范围查询规律
     * 初始化:
     *   int left = 0;
     *   int right = nums.length - 1;
     * 循环条件
     *   left <= right
     * 右边取值
     *   right = mid - 1
     * 左边取值
     *   left = mid + 1
     * 查询条件
     *   >= target值, 则 nums[mid] >= target时, 都减right = mid - 1
     *   >  target值, 则 nums[mid] >  target时, 都减right = mid - 1
     *   <= target值, 则 nums[mid] <= target时, 都加left = mid + 1
     *   <  target值, 则 nums[mid] <  target时, 都加left = mid + 1
     * 结果
     *   求大于(含等于), 返回left
     *   求小于(含等于), 返回right
     * 核心思想: 要找某个值, 则查找时遇到该值时, 当前指针(例如right指针)要错过它, 让另外一个指针(left指针)跨过他(体现在left <= right中的=号), 则找到了
     */


var searchRange = function(nums, target) {
    let left = findLeft(nums,target)
    let right = findRight(nums,target)
    return [left,right]

    function findLeft(nums,target){
        let left = 0,right = nums.length-1
        //先找左边界
        let index = -1
        while (left <= right) {
            let mid = Math.floor((left + right)/2)
            if(nums[mid]>target){
                right = mid -1
            }else if (nums[mid]<target){
                left = mid + 1
            }else{
                index = mid
                right = mid-1
            }
        }
        return index
    }
    function findRight(nums,target){
        let left = 0,right = nums.length-1
        let index = -1
        while (left <= right) {
            let mid = Math.floor((left + right)/2)
            if(nums[mid]>target){
                right = mid -1
            }else if (nums[mid]<target){
                left = mid + 1
            }else{
                index = mid
                left = mid + 1
            }
        }
        return index
    }
};

// 

console.log(searchRange([5,7,7,8,8,10],8));