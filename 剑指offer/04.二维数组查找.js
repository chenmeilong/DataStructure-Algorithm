
// 二维数组中的查找   力扣240 

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

//法一暴力求解 
// var findNumberIn2DArray = function(matrix, target) {
//     for (let i in matrix){
//         let array = matrix[i]
//         if (array.includes(target)){
//             return true
//         }
//     }
//     return false
// };

//法二分查找 时间复杂度 nlog(n)
// var findNumberIn2DArray = function(matrix, target) {
//     for (let i in matrix){
//         let array = matrix[i]
//         let left = 0
//         let right = array.length-1
    
//         let mid
//         while(left <= right){
//             mid = Math.floor((left + right)/2)
//             if(array[mid] > target) right = mid-1
//             else if(array[mid] < target) left = mid+1
//             else {
//                 return true
//             }
//         }
//     }
//     return false
// };

// 法三  右上 开始 看左和下的   左小下大 看成二叉树
// var findNumberIn2DArray = function(matrix, target) {
//     if (matrix.length ===0) return false
//     let i =  0
//     let j =  matrix[0].length-1
//     let  rightTop

//     while(i<matrix.length && j>=0){
//         rightTop = matrix[i][j]
//         if (rightTop > target){
//             j--
//         }else if (rightTop < target){
//             i++
//         }else{
//             return true
//         }
//     }
//     return false
    
// }


//法四 二维矩阵的二分查找的 标准写法  每次舍去1/4 递归剩下的3/4
//  时间复杂度比较高  O(n^1.58)

const array =  [[1,   4,  7, 11, 15],
                [2,   5,  8, 12, 19],
                [3,   6,  9, 16, 22],
                [10, 13, 14, 17, 24],
                [18, 21, 23, 26, 30]]

console.log(findNumberIn2DArray(array, 32))
