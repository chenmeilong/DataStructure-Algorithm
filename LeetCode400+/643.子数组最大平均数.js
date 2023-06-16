var findMaxAverage = function(nums, k) {
    let sum = 0
    for(let i=0;i<k;i++){
        sum+=nums[i]
    }
    let avg = sum/k
    for(let i=k;i<nums.length;i++){
        sum+=nums[i]
        sum-=nums[i-k]
        avg = Math.max(sum/k,avg)
    }
    return avg
}; 

// console.log(findMaxAverage([9,7,3,5,6,2,0,8,1,9],6));
// console.log(findMaxAverage([1,12,-5,-6,50,3],4));
console.log(findMaxAverage([5],1));