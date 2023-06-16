//50 第一个只出现一次的字符
/**
 * @param {string} s
 * @return {character}
 */

//自己写的 哈希表 遍历map 
// var firstUniqChar = function(s) {
//     let map = new Map()
//     for (let i = 0 ; i < s.length; i++){
//         if(map.has(s[i])) {
//             map.set(s[i],map.get(s[i])+1)
//         }
//         else {
//             map.set(s[i],1)
//         }
//     }
//     for (let i of map){
//         if(i[1]===1){
//             return i[0]
//         }
//     }
//     return ' '
// };


//法一 哈希表 遍历s
// var firstUniqChar = function(s) {
//     let map = new Map()
//     for(let key of s){
//         if(map.has(key)) map.set(key,map.get(key)+1)
//         else map.set(key,1)
//     }
//     for(let key of s){
//         if(map.get(key)===1) return key
//     }
//     return ' '
// };

//法二  JS妙解
var firstUniqChar = function(s) {
    for(let i of s){
        if(s.indexOf(i)===s.lastIndexOf(i)){
            return i
        }
    }
    return ' '
};


console.log(firstUniqChar('dddccdbba'))


