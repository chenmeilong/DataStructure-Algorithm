
var longestCommonPrefix = function(strs) {
    if(strs.length===1) return strs[0]
    let res = []
    while(true){
        let n = res.length
        let key = strs[0][n]
        for(let i=1;i<strs.length;i++){
            if(key===undefined || strs[i][n]!==key){
                return res.join('')
            }
        }
        res.push(key)
    }
};

// console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix([""]))
// console.log(longestCommonPrefix(["dog","racecar","car"]))