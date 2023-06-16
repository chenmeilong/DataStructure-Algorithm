
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

//自己用的循环 会超时

//快速幂+递归  时间空间都是O(logn)
// var myPow = function(x, n) {
//     function quickMul(n){
//         if (n==0) return 1
//         let num = quickMul(Math.floor(n/2))
//         return n % 2==1 ? num*num*x : num*num
//     }
//     return n>=0 ? quickMul(n) : 1/quickMul(-n)
// };


//快速幂+迭代  时间都是O(logn)  空间复杂度为1
var myPow = function(x, n) {
    function quickMul(n){
        let num = 1
        contrubute = x
        while(n>0){
            if(n%2 == 1){
                num  *= contrubute
            }
            n = Math.floor(n/2)
            contrubute*=contrubute
        }
        return num 
    }
    return n>=0 ? quickMul(n) : 1/quickMul(-n)
};


console.log(myPow(2,3))
console.log(myPow(42.5,1))

console.log(myPow(2,10))