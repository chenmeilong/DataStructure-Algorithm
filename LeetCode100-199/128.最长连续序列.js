//两种方法  法1 一次遍历每个数子。统计左右两边的连续数量， 顺带计算最大连续数量
//法二：先把所有数子存放在hashmap中。再迭代一遍数组，检查每个值的-1是否在map中，若在一直统计+1在不在且更新最大长度
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    let set = new Set()
    let result = 1
    nums.forEach(num=>set.add(num))
    nums.forEach(num=>{
        if(!set.has(num-1)){
            let n = num
            while(set.has(n)) n++
            result = Math.max(result,n-num)
        }
    })
    return result
};

console.log(longestConsecutive([100,4,200,1,3,2]));