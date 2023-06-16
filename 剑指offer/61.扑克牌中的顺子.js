/**
 * @param {number[]} nums
 * @return {boolean}
 */
//判断顺子  答案解法  很巧妙 
// 排序+遍历
var isStraight = function(nums) {
    nums.sort((a,b)=> a-b)
    let zeroNum = 0
    for(let i = 0 ; i < 4;i++){
        //先统计计算0的个数
        if(nums[i]==0) {
            zeroNum++
            continue
        }
        if( nums[i] == nums[i+1]){
            return false
        }
    }
    return nums[4] - nums[zeroNum] <5
};

// 核心思想
// 1） 不能有重复的数字
// 2） 由于存在大小王，导致数组排序后最后值在数组中的位置发生改变（找到最小值位置）
// 3） 最大值与最小值得差要小于5才能构成顺子
//集合+遍历
var isStraight = function(nums) {
    let set  = new Set()
    let max = 0
    let min = 14
    for(let i=0; i < nums.length; i++){
        if (nums[i] ==0) continue
        max = max > nums[i]? max: nums[i]
        min = min > nums[i]? nums[i]: min
        if (set.has(nums[i])){
            return false
        }
        set.add(nums[i])
    }
    return max-min < 5
};
console.log(isStraight([5,0,3,4,1]))
console.log(isStraight([0,0,1,2,5]))
console.log(isStraight([0,0,2,2,5]))