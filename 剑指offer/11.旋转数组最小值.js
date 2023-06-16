
//力扣154 旋转数组最小数值
/**
 * @param {number[]} numbers
 * @return {number}
 */

//暴力求解 复杂度高
// var minArray = function(numbers) {
//     let min = numbers[0]
//     numbers.forEach(value=>{
//         if(min > value){
//             min = value
//         }
//     })
//     return min
// };


//二分查找  自己想的结合官方解题

//这里的length是数组的长度
// let countIndex = function(index,length){
//     if(index<0){
//         index += length
//     }else if(index>=length){
//         index-=length
//     }
//     return index
// }

// var minArray = function(numbers) {
//     let left = 0 
//     let right = numbers.length - 1
//     while (left < right){
//         let mid = Math.floor((right+left)/2)
//         //左边一个数字 大于 mid那就是边界  返回找到的值
//         if( numbers[countIndex(mid-1,numbers.length)] > numbers[mid]){
//             return numbers[mid]
//         }
//         if (numbers[mid]>numbers[right]){
//             //最小数据区间
//             left = mid+1
//         }else if (numbers[mid]< numbers[right]){
//             right = mid
//         // 等于的情况，那就暴力缩小范围
//         }else{
//             right--
//         }
//     }
//     return numbers[left]
// };


//官方答案
// var minArray = function(numbers) {
//     let left = 0 
//     let right = numbers.length - 1
//     while (left < right){
//         let mid = Math.floor((right+left)/2)
//         if (numbers[mid]>numbers[right]){
//             //最小数据区间
//             left = mid+1
//         }else if (numbers[mid]< numbers[right]){
//             right = mid
//         // 等于的情况，那就暴力缩小范围
//         }else{
//             right--
//         }
//     }
//     return numbers[left]
// };


console.log(minArray([3,4,5,1,2]))
console.log(minArray([1,3,5]))
console.log(minArray([1,1]))
console.log(minArray([3,1,1]))