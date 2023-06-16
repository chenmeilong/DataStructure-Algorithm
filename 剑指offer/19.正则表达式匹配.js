/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

//动态规划
const isMatch = (s, p) => {
    if(s.length==null || p.length==null) return false
    const sLen = s.length
    const pLen = p.length

    let dp =  new Array(sLen+1).fill(0).map(()=> new Array(pLen+1).fill(false))

    dp[0][0] =  true

    for(let j = 1 ; j< pLen+1;j++){
        if(p[j-1]=='*'){
            dp[0][j] = dp[0][j-2]
        }
    }

    for(let i = 1 ; i<sLen+1; i++){
        for(let j=1; j<pLen+1 ; j++){
            if(s[i-1]==p[j-1] || p[j-1]=='.'){
                dp[i][j] = dp[i-1][j-1]
            }else{
                if(p[j-1]=='*'){
                    if(s[i-1]==p[j-2] || p[j-2]=='.'){
                        dp[i][j] = dp[i][j-2] || dp[i-1][j-2] || dp[i-1][j]
                    }else{
                        dp[i][j] = dp[i][j-2]
                    }
                }
            }
        }
    }
    return dp[sLen][pLen]
};


// var isMatch = function(s, p) {
//     let reg=new RegExp(`^${p}$`);
//     return reg.test(s);
// };

// console.log(isMatch('aa','a*'))
// console.log(isMatch('aab','c*a*'))

// console.log(isMatch('ab','.*c'))
console.log(isMatch('aaa','a*a'))


// console.log(isMatch('aqwqwqb','.*b'))
// console.log(isMatch('ab','.*c'))