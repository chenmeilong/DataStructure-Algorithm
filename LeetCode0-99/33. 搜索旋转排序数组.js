/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *///记住 二分拆开 一定有一部分是有序的

 var search = function(nums, target) {
    let left = 0
    let right = nums.length-1
    if(nums.length===1) return nums[0]===target? 0:-1
    while(left < right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]>=nums[left]){
            //说明前面是有序的
            if(target>=nums[left] && target<=nums[mid]){
                //说明target在 left和 mid 有序中
                right =mid
            }else{
                //说明target在 mid+1和right 无序中
                left = mid+1
                if(left===right && nums[left]!==target) return -1  //说明没找到
            }
        }else{
            //说明后面是有序的mid+1 到right
            if(target>=nums[mid+1] && target<=nums[right]){
                //说明target在 mid+1和 right 有序中
                left = mid+1
            }else{
                //说明target在 left和mid 无序中
                right = mid
            }
        }
    }
    return left
};