// 哈希  还有排序在双指针
var maxOperations = function(nums, k) {
    let n = nums.length
    let map = new Map()
    for (let i = 0; i < n; i++){
        map.set(nums[i],(map.get(nums[i]) || 0) + 1)
    }
    let count = 0
    for (let i = 0; i < n;i++){
        let num = k - nums[i]
        // 同时满足两个条件 当nums[i] === num 与  nums[i] ！== num
        if(map.get(nums[i]) && (nums[i] === num && map.get(num)>1 || nums[i] !== num && map.get(num))){
            // 存在和为 k
            let a = map.get(nums[i])
            if(a>1)  map.set(nums[i],a-1)
            else map.delete(nums[i])
            let b = map.get(num)
            if(b>1)  map.set(num,b-1)
            else map.delete(num)
            count++
        }
    }
    return count
};

console.log(maxOperations([2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2],3));