

/**
 * @param {number[]} a
 * @return {number[]}
 */

//法一 左右乘积列表, 计算对应位置的左右两边数字的乘积
// var constructArr = function(a) {
//     let left = new Array(a.length).fill(1)
//     let right = new Array(a.length).fill(1)
//     let mul = new Array(a.length).fill(1)

//     for(let i=1 ; i<a.length ; i++){
//         left[i]=left[i-1] * a[i-1]
//     }
//     for(let i=a.length-2 ; i >= 0 ; i--){
//         right[i]=right[i+1] * a[i+1]
//     }

//     for(let i=0 ; i<a.length ; i++){
//         mul[i]=left[i] * right[i]
//     }
//     return mul
// };

//法二  优化法一的空间复杂度 因为返回的数组不算空间复杂度 使用这o(1)的解决办法
var constructArr = function(a) {
    let mul = new Array(a.length).fill(1)
    for(let i=1 ; i<a.length ; i++){
        mul[i]=mul[i-1] * a[i-1]
    }
    let right =1
    for(let i=a.length-1 ; i >= 0 ; i--){
        mul[i] *= right
        right*=a[i]
    }
    return mul
}

console.log(constructArr([1,2,3,4,5]))
console.log(constructArr([1,2,4,0,5]))