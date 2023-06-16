


/**
 * @param {number} n
 * @return {number}
 */
// var sumNums = function(n) {
//     function add(n){
//         return  n && add(n-1)+n    //巧妙利用与短路效应
//     }
//     return add(n)
// };

//简化到一行
var sumNums = function(n) {
    return  n && sumNums(n-1)+n    //巧妙利用与短路效应
};

console.log(sumNums(9))