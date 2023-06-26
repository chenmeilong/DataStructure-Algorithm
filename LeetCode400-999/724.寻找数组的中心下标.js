var pivotIndex = function(nums) {
    let total = nums.reduce((sum,num)=>sum+=num,0)
    let sum = 0
    let index = -1

    for(let i=0;i<nums.length;i++) {
        if (total-nums[i]-sum===sum) {
            index = i
            break
        }
        sum+=nums[i]
    }
    return index
};

console.log(pivotIndex([-1,-1,0,0,-1,-1]));