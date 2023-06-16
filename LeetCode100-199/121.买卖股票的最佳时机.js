//单调栈 常规法
// var maxProfit = function(prices) {
//     let stack = []
//     let max = 0
//     for(let i=0 ; i<prices.length;i++){
//         while(stack.length && prices[i]<=stack[stack.length-1]){
//             stack.pop()
//         }
//         stack.push(prices[i])
//         max = Math.max(max,stack[stack.length-1]-stack[0])
//     }
//     return max
// };

//单调栈优化
var maxProfit = function(prices) {
    let min = prices[0]
    let max = 0
    prices.forEach(num=>{
        min = Math.min(min,num)
        max = Math.max(max,num-min)
    })
    return max
};
console.log(maxProfit([7,1,5,3,6,4]));