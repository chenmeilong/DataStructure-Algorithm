var reverseWords = function(s) {
    s = s.trim()
    let res =''
    let l = s.length-1
    let r = s.length
    while(l>=0 && r>=l){
        if(s[l]===' ' && s[l-1]!==' '){
            res+=s.slice(l+1,r).trim()
            res+=' '
            r = l
        }
        l--
    }
    res+=s.slice(0,r)
    // console.log(res);
    return res
};

console.log(reverseWords('a good   example'));