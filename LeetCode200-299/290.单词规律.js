//  任意一个字符都对应着唯一的字符串，任意一个字符串也只被唯一的一个字符对应。在集合论中，这种关系被称为「双射」
var wordPattern = function(pattern, s) {

    let map = new Map()
    let set = new Set()
    let strArr = s.split(' ')
    if(strArr.length!==pattern.length) return false
    for(let i=0;i<pattern.length;i++){
        if(map.has(pattern[i])  && map.get(pattern[i])!==strArr[i] || !map.has(pattern[i]) &&  set.has(strArr[i])){
            return false
        }else if(!map.has(pattern[i])){
            map.set(pattern[i],strArr[i])
            set.add(strArr[i])
        }
    }
    return true
};