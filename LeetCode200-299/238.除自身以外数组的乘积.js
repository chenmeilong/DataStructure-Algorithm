
var productExceptSelf = function(nums) {
    let result = new Array(nums.length).fill(1)
    for(let i = 1; i<nums.length ;i++){
        result[i] = nums[i-1]*result[i-1]
    }
    let buff = 1
    for(let i = nums.length-2; i>=0 ;i--){
        buff*=nums[i+1]
        result[i]*=buff
    }
    return result
};
console.log(productExceptSelf([1,2,3,4]));