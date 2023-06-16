
//动态规划
var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict)
    let dp = new Array(s.length+1).fill(false)
    dp[0] = true

    for(let i=1; i<=s.length; i++){
        //当前位置能否匹配成功   //这个循环不好想到
        for(let j=i-1; j>=0; j--){  //检查每个j-i的字符能否被匹配
            if(dp[j] && set.has(s.slice(j,i))){
                dp[i] = true
                break
            }
        }
    }
    return dp[s.length]
};

// console.log(wordBreak("applepenapple",["apple", "pen"]));
console.log(wordBreak("aaaaaaa",["aaaa","aaa"]));