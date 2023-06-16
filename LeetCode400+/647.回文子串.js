// DP 时间域空间复杂度都是n^2  空间可以优化到n 容易踩坑
var countSubstrings = function(s) {
    let count = 0
    let n = s.length
    let dp = new Array(n).fill(false).map(()=>new Array(n).fill(false))
    for(let j=0;j<n;j++){ //end
        for(let i=0;i<=j;i++){  //start
            if(s[i]===s[j]){
                if(j-i<2){   //包括奇数和偶数位置
                    dp[i][j] = true
                    count++
                }else{
                    dp[i][j] = dp[i+1][j-1]
                    if(dp[i][j])count++
                }
            }
        }
    }
    return count
};

// 中心扩展法 时间n^2空间1
// var countSubstrings = function(s) {
//     let num = 0
//     let n = s.length
//     for(let i=0;i<n;i++){ //遍历中心点
//         for(let j=0;j<2;j++){  //选择奇偶数
//             let l = i
//             let r = i+j
//             while(l>=0 && r<n && s[l--]===s[r++])  num++
//         }
//     }
//     return num
// };

console.log(countSubstrings('aaa'));