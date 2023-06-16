/**
 * @param {string[]} strs
 * @return {string[][]}
 */
//法1 字母排序+哈希表  时间n*klogk n是字符个数，k是字符长度  空间复杂度为n*k k为易位词的个数  
var groupAnagrams = function(strs) {
    let map = new Map()
    strs.forEach((str)=>{
        let key =  str.split('').sort().join('')
        if(map.has(key)){
            map.get(key).push(str)
        }else{
            map.set(key,[str])
        }
    })
    return Array.from(map.values())
};


//法二 计数  时间nk   空间n（k+26） ， 注意这里有坑 数组作为 map的key会出现问题，因为数组其实存的是地址  所以用对象实现 
//尽量不要用此法，容易踩坑
// var groupAnagrams = function(strs) {
//     let map = {}
//     strs.forEach(str=>{
//         let arr = new Array(26).fill(0)
//         for(let i = 0 ; i < str.length; i++){
//             let index = str[i].charCodeAt()-'a'.charCodeAt()
//             arr[index] +=1
//         }
//         map[arr]? map[arr].push(str) : map[arr] = [str]
//     })
//     return Object.values(map)
// };



console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));