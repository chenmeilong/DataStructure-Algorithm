var twoSum = function(nums, target) {
    if(!(nums instanceof Array)) return []
    let map = new Map()
    for(let index=0; index<nums.length;index++){
        if(map.has(nums[index])){
            return [map.get(nums[index]),index]
        }else{
            map.set(target-nums[index],index)
        }
    }
};