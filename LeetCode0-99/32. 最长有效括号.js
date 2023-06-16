/**
 * @param {string} s
 * @return {number}
 */
//法一 动态规划 
// var longestValidParentheses = function(s) {
//     if(s.length===0) return 0 
//     let DP = new Array(s.length).fill(0)
//     for(let i=0; i< s.length; i++){
//         if(s[i]===')'){
//             if(i-1>=0 && s[i- DP[i-1]-1]==='('){
//                 DP[i] = 2 + DP[i-1]
//                 if(i-DP[i-1]-2>0){
//                     DP[i] += DP[i-DP[i-1]-2]
//                 } 
//             }
//         }
//     }
//     return Math.max(...DP)
// };

// 法二栈 
// var longestValidParentheses = function(s) {
//     if(s.length===0) return 0 
//     let stack = [-1]
//     let max = 0
//     for(let i=0; i<s.length ; i++){
//         if(s[i]==='('){
//             stack.push(i)
//         }else{
//             stack.pop()
//             if(stack.length){
//                 max = Math.max(max,i-stack[stack.length-1])
//             }else{
//                 stack.push(i)
//             }
//         }
//     }
//     return max
// };

// 法三正向逆向结合  巧妙
var longestValidParentheses = function(s) {
    let left = 0
    let right = 0
    let max = 0

    for(let i = 0 ; i<s.length ; i++){
        if(s[i]==='('){
            left++
        }else{
            right++
        }

        if(left===right){
            max = Math.max(left*2,max)
        }else if (right>left){
            left=0
            right = 0
        }
    }

    left = 0
    right = 0
    for(let i = s.length-1 ; i>=0 ; i--){
        if(s[i]==='('){
            left++
        }else{
            right++
        }

        if(left===right){
            max = Math.max(left*2,max)
        }else if (right<left){
            left=0
            right = 0
        }
    }
    return max
};


// console.log(longestValidParentheses("(()"));
console.log(longestValidParentheses(")()())"));