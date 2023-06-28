/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
//递归超时  使用在递归基础上使用buff空间换时间
// var minDistance = function(word1, word2) {
//     let buff = new Array(word1.length).fill(-1).map(()=>new Array(word2.length).fill(-1))
//     return dfs(word1.length-1,word2.length-1)
//     function dfs(index1,index2){
//         if(index1===-1 && index2===-1)  return 0
//         if(index1===-1){
//             //只能添加
//             return 1+index2
//         }
//         if(index2===-1){
//             //只能删除
//             return 1+index1
//         }

//         if(buff[index1][index2]===-1){
//             let count
//             if(word1[index1]===word2[index2]){
//                 count = dfs(index1-1,index2-1)
//             }else{
//                 count = 1+Math.min(dfs(index1,index2-1) ,dfs(index1-1,index2),dfs(index1-1,index2-1))
//             }
//             buff[index1][index2] = count
//             return count
//         }else{
//             return buff[index1][index2]
//         }
//     }
// };

//动态规划  空间可优化成m+n
// var minDistance = function(word1, word2) {
//     let m = word1.length+1
//     let n = word2.length+1
//     let dp = new Array(m).fill(-1).map(()=>new Array(n).fill(-1))
//     // 初始化第一行和第一列
//     dp[0][0] = 0 
//     for(let i = 1; i<m; i++){
//         dp[i][0] = i
//     }
//     for(let j = 1; j<n; j++){
//         dp[0][j] = j
//     }
//     for(let i = 1; i<m; i++){
//         for(let j = 1; j<n; j++){
//             if(word1[i-1]===word2[j-1]){
//                 dp[i][j] =dp[i-1][j-1]
//             }else{
//                 dp[i][j] = 1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])
//             }
            
//         }
//     }
//     return dp[m-1][n-1]
// };

// 空间优化后
// var minDistance = function(word1, word2) {
//     let  m = word1.length
//     let  n = word2.length
//     let dp = new Array(n+1).fill(0).map((num,index)=> index)
//     for(let i=1;i<=m;i++){
//         let leftTop = dp [0]
//         dp[0] = i
//         for(let j=1;j<=n;j++){
//             let buff = dp[j]
//             if(word1[i-1]===word2[j-1]){
//                 dp[j] = leftTop
//             }else{
//                 dp[j] = Math.min(dp[j-1],leftTop,dp[j])+1
//             }
//             leftTop = buff
//         }
//     }
//     return dp[n]
// };

console.log(minDistance("ros","horse"));