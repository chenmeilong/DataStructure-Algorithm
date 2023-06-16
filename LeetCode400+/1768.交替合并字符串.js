var mergeAlternately = function(word1, word2) {
    let str = ''
    let i = 0
    while(word1.length > i && word2.length > i){
        str += word1[i]
        str += word2[i]
        i++
    }
    if(word1.length>i) str += word1.slice(i)
    if(word2.length>i) str += word2.slice(i)
    return str
};