var searchMatrix = function(matrix, target) {
    let m = matrix.length
    let n = matrix[0].length
    let i = 0
    let j = n-1
    while(i<m && j>=0){
        if(matrix[i][j]===target) return true
        else if(matrix[i][j]>target) j--
        else i++
    }
    return false
};
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]],45));