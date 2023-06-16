/**
 * @param {string} s
 * @return {string}
 */
//动态规划 可以做  ，这里是中心扩散法
// var longestPalindrome = function(s) {
//     //最后来优化执行效率
//     let maxStr = ''
//     for(let i = 0 ; i < s.length ; i++){
//         let layer = countChart(i)  //情况1 回文
//         if(layer*2+1 > maxStr.length){
//             maxStr = s.slice(i-layer,i+layer+1)
//         }
//         if(i < s.length-1 && s[i]===s[i+1]){
//         //情况2回文
//             layer = countChart2(i)
//             if(layer*2 > maxStr.length){  //默认算一层
//                 maxStr = s.slice(i-layer+1,i+layer+1)
//             }
//         }
        
//     }
//     return maxStr

//     function countChart(index){
//         let huiwen = true
//         let layer = 0
//         while(huiwen){
//             layer++
//             huiwen = (index-layer>=0 && index+layer<s.length && s[index-layer]===s[index+layer])?true:false
//         }
//         layer--
//         return layer
//     }
//     function countChart2(index){
//         let huiwen = true
//         let layer = 1
//         while(huiwen){
//             layer++
//             huiwen = (index-layer+1>=0 && index+layer<s.length && s[index-layer+1]===s[index+layer])?true:false
//         }
//         layer--
//         return layer
//     }
// };

//动态规划
var longestPalindrome = function(s) {
    if(typeof s !== 'string' || s.length===0) return ''
    let dp = new Array(s.length).fill(false).map(()=>new Array(s.length).fill(false))
    for(let i=0; i<s.length;i++){
        dp[i][i]=true
    }
    let max=[0,0]
    for(let j=1; j<s.length;j++){  //j指的是列  结束符
        for(let i=0; i<j;i++){
            //计算dp
            if(s[i]===s[j]){    //j必须要大于等于i
                if(j-i>1){
                    dp[i][j]=dp[i+1][j-1]
                }else{
                    dp[i][j]=true
                }
                if(dp[i][j]===true){
                    max = j-i>max[1]-max[0]? [i,j]:max
                }
            }
        }
    }
   return s.slice(max[0],max[1]+1)
};

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("bb"));
console.log(longestPalindrome("ccc"));
console.log(longestPalindrome("aaaa"));