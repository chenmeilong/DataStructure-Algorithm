
// 二分查找
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
    let left = 0
    let right = m*n-1
    // console.log(Math.floor(right/n),right%n);
    while(left<right){
        mid = (left+right)>>1
        if(matrix[Math.floor(mid/n)][mid%n]>=target){
            right = mid
        }else{
            left = mid + 1
        }
    }
    return matrix[Math.floor(left/n)][left%n] === target
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],3));