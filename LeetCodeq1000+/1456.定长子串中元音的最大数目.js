var maxVowels = function(s, k) {
    let res = 0
    let count = 0
    // 初始化滑动窗口
    for(let i=0;i<k;i++){
        if(isYuan(s[i])) count++
    }
    res = count
    for(let i=k;i<s.length;i++){
        if(isYuan(s[i])) count++
        if(isYuan(s[i-k])) count--
        res = Math.max(res,count)
    }
    return res
    function isYuan(chart){
        return 'aeiou'.indexOf(chart)!==-1  //true是元音
    }
};

console.log(maxVowels("abciiidef",3));