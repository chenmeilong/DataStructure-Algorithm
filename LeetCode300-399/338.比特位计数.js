// nlogn
// var countBits = function(n) {
//     let result = []
//     for(let i=0;i<=n;i++){
//         let a = i
//         let count = 0
//         while(a>0){
//             if(a&1) count++
//             a>>=1
            
//         }
//         result.push(count)
//     }
//     return result
// };

//n时间复杂度
// 思路 分为奇数 偶数讨论 （最低有效位）
var countBits = function(n) {
    let result = new Array(n+1).fill(0)
    for(let i=1;i<=n;i++){
        if(i&1) result[i] = result[i-1] +1   //奇数
        else result[i] = result[i>>1]        //偶数
        // 合并为一行
        // result[i] = result[i>>1] + (i&1)  //
    }
    return result
};

console.log(countBits(5));