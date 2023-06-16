/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers = function(nums) {
    let returnx = 0
    let returny = 0
    let n = 0
    let m = 1
    nums.forEach(num=>{n^=num})
    while((n&m)==0){
        m<<=1
    }
    nums.forEach(num=>{
        if(num&m) returnx^=num
        else returny^=num
    })
    return [returnx,returny]
};

console.log(singleNumbers([1,2,10,4,1,4,3,3]))