
//深度优先遍历，状态重置  这样能节约空间
//需要三个状态变量   时间复杂度n*n!  空间复杂度n*n!  递归深度是n 全排列的总数为n！ 所以是n*n！  推导过程比较复杂
//1.递归到第几层 depath  2.已选看哪些数path，3.布尔数组used(重点)
var permute = function(nums) {
    let len= nums.length
    let List = []
    let used = new Array(nums.length).fill(false)
    dfs([],used)

    function dfs(path,used){
        if(path.length===len){
            List.push(path.slice(0))
            return null
        }
        for(let i=0;i<len;i++){
            if(used[i]===true) continue
            used[i] = true
            path.push(nums[i])
            dfs(path,used)
            path.pop()
            used[i] = false  //因为这两行节省了空间
        }
    }
    return List
};


console.log(permute([1,2,3]));