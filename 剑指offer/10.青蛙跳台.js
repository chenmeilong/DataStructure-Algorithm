/**
 * @param {number} n
 * @return {number}
 */
//动态规划问题
var numWays = function(n) {
    if(n<2) return 1
    let a=0
    let b=1
    let c=1
    for (let i=2;i<=n;i++){
        a=b
        b=c
        c=(a+b)%1000000007
    }
    return c
};

//