/**
 * @param {number[]} nums
 * @return {number}
 */

//法1 哈希表统计
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
//         if(map.get(key)>nums.length/2){
//             return key
//         }
//     }
//     return null
// };

//法二 排序 输出n/2
// var majorityElement = function(nums) {
//     nums.sort((a,b)=>a-b)
//     return nums[parseInt(nums.length/2)]
// }

//法三 随机法  本质是随机选取一个数字  再统计它出现的次数 再检测  时间复杂度是随机的  空间复杂度1
// var majorityElement = function(nums) {
//     let  majority_count = parseInt(nums.length/2)
//     while (true){
//         //随便选取一个数
//         let candidate = nums[Math.floor(Math.random()*(nums.length))]
//         let count=0
//         nums.forEach(num=>{
//             if(num== candidate) count++
//         })
//         if(count>majority_count) return candidate
//     }
// }

//法四 分治算法  用起来感觉大材小用 ，增加复杂度
// var majorityElement = function(nums) {
//     return diviSolve(0,nums.length-1)
//     //左右都是闭区间
//     function diviSolve(left,right){
//         // console.log(left,right)
//         if(left==right){
//             return nums[left]
//         }
//         let middle = Math.floor((left+right)/2)

//         let leftVal = diviSolve(left, middle)
//         let rightVal = diviSolve(middle+1, right)
//         // console.log(leftVal,rightVal)
//         if (leftVal== rightVal) return leftVal
//         let leftCount=0
//         let rightCount=0
//         nums.forEach(num=>{
//             if(num== leftVal) leftCount++
//             if(num== rightVal) rightCount++
//         })
//         return leftCount>rightCount?leftVal:rightVal
//     }
// }

//法五 Boyer-Moore 投票算法  最佳解法
var majorityElement = function(nums) {
    let count = 0
    let moreNum
    nums.forEach(num=>{
        if(count>0){
            if(num== moreNum)count++
            else count--
        }else{
            moreNum = num
            count = 1
        }
    })
    return moreNum
}


console.log(majorityElement([1,2,3,2,2,2,5,4,2]))
console.log(majorityElement([3,2,3]))
console.log(majorityElement([8,8,7,7,7]))