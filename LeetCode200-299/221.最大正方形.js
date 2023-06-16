// DP ,这里使用了虚拟DP两边
var maximalSquare = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0))
    let result = 0

    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(matrix[i-1][j-1]==='1'){
                dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1
                result = Math.max(result,dp[i][j])
            }
        }
    }
    return result*result
};


const matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]

console.log(maximalSquare(matrix));