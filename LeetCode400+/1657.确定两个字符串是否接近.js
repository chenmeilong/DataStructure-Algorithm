// 比较种类和个数
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length) return false
    let map1 = new Map()
    let map2 = new Map()
    for(let i = 0 ; i < word1.length ; i++){
        map1.set(word1[i],(map1.get(word1[i]) || 0) + 1)
        map2.set(word2[i],(map2.get(word2[i]) || 0) + 1)
    }

    let key1 = Array.from(map1.keys())
    let key2 = Array.from(map2.keys())
    let cha = key1.every(x=>key2.includes(x))
    if(!cha) return false

    let arr1 = Array.from(map1.values()).sort((a,b)=>a-b)
    let arr2 = Array.from(map2.values()).sort((a,b)=>a-b)
    let len = Math.min(arr1.length,arr2.length)
    console.log(arr1,arr2);
    for(let i=0;i<len;i++){
        if(arr1[i]!==arr2[i]) return false
    }
    return true
};

// console.log(closeStrings("aua","ssx"));
// console.log(closeStrings("cabbba","abbccc"));
console.log(closeStrings("abbzzca","babzzcz"));