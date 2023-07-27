

var permuteUnique = function(nums) {
    let used = new Array(nums.length).fill(false)
    let n = nums.length
    let res = []
    const dfs = (buff,used)=>{
        if(buff.length===n){
            res.push(buff.slice(0))
            return null
        }
        let drop = []  //去重
        for(let i=0;i<n;i++){
            if(used[i] || drop.includes(nums[i])) continue
            drop.push(nums[i])
            buff.push(nums[i])
            used[i]= true
            dfs(buff,used)
            buff.pop()
            used[i]= false
        }
    }
    dfs([],used)
    return res
};


console.log(permuteUnique(nums = [1,1,3]));