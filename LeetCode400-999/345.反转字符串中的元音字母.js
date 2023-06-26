var reverseVowels = function(s) {
    let l = 0
    let r = s.length-1
    let sArr = Array.from(s)
    while(l<r){
        while(l<r && isFY(sArr[l])) l++
        while(l<r && isFY(sArr[r])) r--
        if(l<r){
            [sArr[l],sArr[r]] = [sArr[r],sArr[l]] 
            l++
            r--
        }
    }
    return sArr.join('')
    function isFY(chart){ //是否为辅音
        return "aeiouAEIOU".indexOf(chart)===-1
    }
};
console.log(reverseVowels('leetcode'));
var reverseVowels = function(s) {
    let l = 0
    let r = s.length-1
    let sArr = Array.from(s)
    while(l<r){
        while(l<r && isFY(sArr[l])) l++
        while(l<r && isFY(sArr[r])) r--
        if(l<r){
            [sArr[l],sArr[r]] = [sArr[r],sArr[l]] 
            l++
            r--
        }
    }
    return sArr.join('')
    function isFY(chart){ //是否为辅音
        return "aeiouAEIOU".indexOf(chart)===-1
    }
};