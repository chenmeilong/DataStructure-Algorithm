

/**
 * @param {number} n
 * @return {number}
 */
//法一 递归法
// var fib = function(n) {
//     if (n==0) return 0
//     if (n==1) return 1
//     if(n>1) return fib(n-1)+fib(n-2)
// };

//法二 记忆化递归
// var fib = function(n) {
//     const MOD = 1000000007
//     let buff = [0,1]
//     function count(num){
//         if(buff[num]!=null){
//             return buff[num]
//         }
//         else {
//             buff[num] = (count(num-1)+count(num-2))%MOD
//             return buff[num]
//         }
//     }
//     return count(n)
// };

//动态规划
// var fib = function(n) {
//     const MOD = 1000000007
//     if (n<2) return n
//     let buff = [0,1,1]
//     for(let i=2; i<n; i++){
//         buff[0]=buff[1]
//         buff[1]=buff[2]
//         buff[2]=(buff[0]+buff[1])%MOD
//     }
//     return buff[2]
// };


//矩阵快速幂  转换成数学问题来解决 时间复杂度为logn  还有一种公式推导法 时间复杂度为1
// var fib = function(n) {
//     if (n < 2) {
//         return n;
//     }
//     const q = [[1, 1], [1, 0]];
//     const res = pow(q, n - 1);
//     return res[0][0];
// };
// const pow = (a, n) => {
//     let ret = [[1, 0], [0, 1]];
//     while (n > 0) {
//         if ((n & 1) === 1) {
//             ret = multiply(ret, a);
//         }
//         n >>= 1;
//         a = multiply(a, a);
//     }
//     return ret;
// }
// const multiply = (a, b) => {
//     const c = new Array(2).fill(0).map(() => new Array(2).fill(0));
//     for (let i = 0; i < 2; i++) {
//         for (let j = 0; j < 2; j++) {
//             c[i][j] = (BigInt(a[i][0]) * BigInt(b[0][j]) + BigInt(a[i][1]) * BigInt(b[1][j])) % BigInt(1000000007);
//         }
//     }
//     return c;
// }


console.log(fib(2))
console.log(fib(45))