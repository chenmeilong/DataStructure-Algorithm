//三种解法 甚至更多 哈希统计，排序取中间，一个怼一个
// var majorityElement = function(nums) {
//     let map = new Map()
//     nums.forEach(num=>{
//         if(map.has(num)){
//             map.set(num,map.get(num)+1)
//         }else{
//             map.set(num,1)
//         }
//     })
//     for(let key of map.keys()){
//         if(map.get(key)>=Math.ceil(nums.length/2)) return key
//     }
// };

// var majorityElement = function(nums) {
//     nums.sort((a,b)=>a-b)
//     return nums[Math.floor(nums.length/2)]
// };

var majorityElement = function(nums) {
    let value = nums[0]
    let count = 1
    for(let i = 1 ; i < nums.length;i++){
        if(nums[i]===value) count++
        else if(nums[i]!==value && count>0) count--
        else{
            count++
            value = nums[i]
        }
    }
    return value
};

console.log(majorityElement([2,2,1,1,1,2,2]));