
//原始递归超时
// var numTrees = function(n) {
//     let arr = []
//     for(let i = 1 ; i<=n;i++){
//         arr.push(i)
//     }
//     return digui(arr)

//     function digui(arr){
//         if(arr.length===1) return 1
//         if(arr.length===0) return 0
//         let result = 0
//         for(let i = 1 ; i<=arr.length;i++){
//             let list = []
//             for(let j = 1 ; j<=arr.length; j++){
//                 if(i!==j) list.push(j)
//             }
//             // list是缺少i的 因为i是root val
//             let listLeft = []
//             let listRight = []
//             for (let val of list){
//                 if(val>i) listRight.push(val)
//                 else listLeft.push(val)
//             }
//             if(listLeft.length===0) result+=digui(listRight)
//             else if(listRight.length===0) result+=digui(listLeft)
//             else{
//                 result+=digui(listRight)*digui(listLeft)
//             }
//         }
//         return result
//     }
// };


//对递归进行存储优化  
// var numTrees = function(n) {
//     let dp = new Array(20)
//     dp[0] = 0
//     dp[1] = 1
//     return digui(n)
//     function digui(num){
//         if(dp[num]!==undefined) return dp[num]
//         let result = 0
//         for(let i = 0 ; i<num;i++){
//             let listLeft = i
//             let listRight = num-i-1

//             if(dp[listLeft]===undefined){
//                 dp[listLeft] = digui(listLeft)
//             }
//             if(dp[listRight]===undefined){
//                 dp[listRight] = digui(listRight)
//             }
            
//             if(listLeft===0) result+=dp[listRight]
//             else if(listRight===0) result+=dp[listLeft]
//             else{
//                 result+=dp[listRight]*dp[listLeft]
//             }
//         }
//         return result
//     }
// };

//终极优化版本
var numTrees = function(n) {
    let dp = []
    dp.push(1)  //方便计算
    dp.push(1)
    if(n<3) return dp[n]
    for(let i = 2 ; i<=n;i++){
        let count = 0
        for(let left = 0 ; left < i ; left++){
            let right = i-left-1
            count+=dp[left]*dp[right]  //计算归纳出来
        }
        dp.push(count)  
    }
    console.log(dp);
    return dp[n]
};

console.log(numTrees(4));