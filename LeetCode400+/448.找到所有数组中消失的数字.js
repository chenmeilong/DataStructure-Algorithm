// 原地哈希
function swap(arr,x,y){
    let buff = arr[x]
    arr[x] = arr[y]
    arr[y] = buff
    return arr
}
var findDisappearedNumbers = function(nums) {
    let i = 0
    while(i<nums.length){
        if(nums[i]!==i+1 && nums[i]!==nums[nums[i]-1]){
            swap(nums,i,nums[i]-1)
        }else{
            i++
        }
    }
    let result = []
    for(let i =0;i<nums.length;i++){
        if(nums[i]!==i+1) result.push(i+1)
    }
    return result
};
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));