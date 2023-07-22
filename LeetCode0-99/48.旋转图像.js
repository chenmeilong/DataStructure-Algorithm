/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
//法1 不要用[]结构数组赋值swap，会出现奇怪的问题
// var rotate = function(matrix) {
//     let n = matrix.length
//     let iLength = Math.floor(matrix.length/2)
//     let jLength = Math.ceil(matrix.length/2)

//     for(let i = 0; i<iLength;i++){
//         for(let j = 0; j<jLength;j++){
//                 //模拟转一圈 算完左上角
//                 swap(matrix,i,j,j,n-i-1)
//                 swap(matrix,i,j,n-i-1,n-j-1)
//                 swap(matrix,i,j,n-j-1,i)
//         }
//     }
//     return matrix

//     function swap(matrix,i1,j1,i2,j2){
//         let buff = matrix[i1][j1]
//         matrix[i1][j1] = matrix[i2][j2]
//         matrix[i2][j2] = buff
//     }
// };

//翻转
// var rotate = function(matrix) {
//     let n = matrix.length
//     //上下翻转
//     for(let i = 0 ; i < Math.floor(n/2) ; i++){
//         for(let j = 0 ; j < n ; j++){
//             swap(matrix,i,j,n-i-1,j)
//         }
//     }
//     //对角线翻转
//     for(let i = 0 ; i < n ; i++){
//         for(let j = i+1 ; j < n ; j++){
//             swap(matrix,i,j,j,i)
//         }
//     }

//     function swap(matrix,i1,j1,i2,j2){
//         let buff = matrix[i1][j1]
//         matrix[i1][j1] = matrix[i2][j2]
//         matrix[i2][j2] = buff
//     }
//     return matrix
// };


console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
