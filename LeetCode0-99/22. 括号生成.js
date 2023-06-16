/**
 * @param {number} n
 * @return {string[]}
 */
//回溯
// var generateParenthesis = function(n) {
//     let arr = []
//     digui('',0,0)
//     return arr
//     function digui(str,left,right){
//         if(left===n && right===n){
//             arr.push(str)
//             return null
//         }

//         if(left===right){
//             //只能放左括号
//             digui(str+'(',left+1,right)
//         }else if(left>right){
//             if(left>=n){
//                 digui(str+')',left,right+1)
//             }else{
//                 digui(str+'(',left+1,right)
//                 digui(str+')',left,right+1)
//             }
//         }
//     }  
// };
//动态规划,
var generateParenthesis = function(n) {
    if (n == 0) return []
    let dp = []
    dp.push([''])    //0组括号时记为None
    dp.push(["()"])    // 1组括号只有一种情况
    for(let i =2 ; i<n+1 ; i++){  //开始计算i组括号时的括号组合
        let l = []
        for (let j = 0 ; j<i;j++){ // 开始遍历 p q ，其中p+q=i-1 , j 作为索引
            let now_list1 = dp[j]    // p = j 时的括号组合情况
            let now_list2 = dp[i-1-j]    // q = (i-1) - j 时的括号组合情况
            console.log(now_list1);
            console.log(now_list2);
            console.log('##');
            for(let k1 of now_list1){
                for(let k2 of now_list2){
                    let el = "(" + k1 + ")" + k2
                    l.push(el)    // 把所有可能的情况添加到 l 中
                } 
            }  
        }   
        dp.push(l)    // l这个list就是i组括号的所有情况，添加到dp中，继续求解i=i+1的情况 
    }
    return dp[n]
};


console.log(generateParenthesis(3));