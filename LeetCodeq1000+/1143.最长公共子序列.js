
var longestCommonSubsequence = function(text1, text2) {
    let m = text1.length
    let n = text2.length
    let dp = new Array(n+1).fill(0)
    for(let i=1;i<=m;i++){
        let leftTop = dp [0]  //记录左上角的值
        for(let j=1;j<=n;j++){
            let buff = dp [j]
            let a = text1[i-1]===text2[j-1]?1:0
            dp[j] = Math.max(leftTop+a,dp[j-1],dp[j])
            leftTop = buff
        }
    }
return dp[n]
};

console.log(longestCommonSubsequence("abcde","ace"));