//左旋转字符串
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */

//法一
// var reverseLeftWords = function(s, n) {
//     return s.slice(n)+s.slice(0,n)
// };

//法二
var reverseLeftWords = function(s, n) {
    const array =[]
    for (let i=n ; i<s.length ; i++){
        array.push(s[i])
    }
    for (let i=0 ; i<n ; i++){
        array.push(s[i])
    }
    return array.join('')
};


console.log(reverseLeftWords('asdfg',2))
