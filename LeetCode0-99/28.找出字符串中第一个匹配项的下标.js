
var strStr = function(haystack, needle) {
    let index = 0
    while(index < haystack.length) {
        if(haystack[index] === needle[0]){
            let parent = index
            let children = 0
            while(children<needle.length){
                if(haystack[parent] !== needle[children]) break
                if(children===needle.length-1) return index
                parent++
                children++
            }
        }
        index++
    }
    return -1
};


console.log(strStr("abcbutsasd","a"));