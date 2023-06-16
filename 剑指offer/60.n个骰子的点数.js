


/**
 * @param {number} n
 * @return {number[]}
 */

//动态规划  自己想的一次计算
// var dicesProbability = function(n) {
//     let dp = new Array(6).fill(1/6)
//     for(let i = 2 ; i < n+1 ; i++){
//         let tmp = new Array(6*i+1).fill(0)
//         //就算每个点数的概率
//         for(let point = i; point<6*i+1; point++){
//             //根据前一个概率 推导出当前的概率  
//             for(let k= 1 ; k<=6 ; k++){
//                 if(point-k<=(i-1)*6 && point-k>=i-1){
//                     tmp[point]+=dp[point-k-i+1]
//                 }
//             }
//             tmp[point]/=6
//         }
//         dp = tmp.slice(i)
//     }
//     return dp
// };

//动态规划 优化版  减少无效 计算 且 i从0开始计算 提高计算效率
var dicesProbability = function(n) {
    let dp = new Array(6).fill(1/6)
    for(let i = 2 ; i < n+1 ; i++){
        let tmp = new Array(5*i+1).fill(0)
        for(let  j = 0; j < dp.length; j++){
            for(let k= 0 ; k<6 ; k++){
                tmp[j+k]+=dp[j]/6
            }
        }
        dp = tmp
    }
    return dp
};

console.log(dicesProbability(2))

