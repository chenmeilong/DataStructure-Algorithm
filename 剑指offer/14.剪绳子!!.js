

//数学方法
// var cuttingRope = function(n) {
//     if(n<4) return n-1
//     let mul = 1

//     while(n>0){
//         if(n>2){
//             mul*=3
//         }else if(n==2){
//             mul = mul * 2
//         }else if(n==1){
//             while(mul %3!=0 ){
//                 mul += Math.pow(10,9)+7
//             }
//             mul = mul / 3 * 2 * 2
//         }
//         mul = mul%(Math.pow(10,9)+7)
//         n-=3
//     }
//     return mul%(Math.pow(10,9)+7)
// };

//动态规划  过不去 因为有限制



// console.log(cuttingRope(10)) 

console.log(cuttingRope(120))   //439254203