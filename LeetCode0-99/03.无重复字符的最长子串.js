
/**
 * @param {string} s
 * @return {number}
 */

//自己写得的滑动窗口 时间空间都是60%击败
// var lengthOfLongestSubstring = function(s) {
//     if(s.length==0 || s==null) return 0
//     let list = []
//     let max = 1
//     for(let i=0 ; i<s.length ; i++){
//         if(list.includes(s[i])){
//             if(list.length>max) max = list.length
//             list.splice(0,list.indexOf(s[i])+1)   //清除前面几个位置的数据  比如(ab)cb
//         }
//         list.push(s[i])
//     }
//     if(list.length>max) max = list.length
//     return max
// };

// 不使用slice
// var lengthOfLongestSubstring = function(s) {
//     if(typeof s !=='string' || s.length==0) return 0
//     let left = 0
//     let max = 1  
//     for(let right =1 ; right<s.length;right++){  //包含left 包含  i
//         for(let i = left; i<right;i++){
//             if(s[i]===s[right]){
//                 max =Math.max(max,right-left)
//                 left = i+1
//                 break
//             }
//         }
//     }
//     max =Math.max(max,s.length-left)  //补充最后一位
//     return max
// };

console.log(lengthOfLongestSubstring('aabaab!bb'))