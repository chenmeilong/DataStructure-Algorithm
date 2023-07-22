var setZeroes = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]===0){
                // 横向和纵向不为0的都要为‘.’,最后再全部设置为0
                for(let k=0;k<n;k++){
                    if(matrix[i][k]!==0) matrix[i][k] = '.'
                }
                for(let k=0;k<m;k++){
                    if(matrix[k][j]!==0) matrix[k][j] = '.'
                }
            }
        }
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(matrix[i][j]==='.') matrix[i][j]=0
        }
    }
    return matrix
};


console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));