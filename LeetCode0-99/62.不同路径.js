/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
//动态规划  但是内存还可以优化
// var uniquePaths = function(m, n) {
//     if((m<2 || n<2)) return 1
//     let dp = new Array(m).fill(1).map(()=>new Array(n).fill(1))
//     for(let i = 1; i <m ; i++){
//         for(let j = 1; j<n ; j++){
//             dp[i][j] = dp[i-1][j] + dp[i][j-1]
//         }
//     }
//     return dp[m-1][n-1]
// };      
//内存优化版本n
var uniquePaths = function(m, n) {
    if(m<2 || n<2) return 1
    let dp = new Array(n).fill(1)
    for(let i=1; i<m; i++){
        for(let j=1;j<n;j++){
            dp[j] += dp[j-1]
        }
    }
    return dp[n-1]
};



console.log(uniquePaths(3,7));