var isSubsequence = function(s, t) {
    let sindex = 0
    for(let i=0; i<t.length;i++){
        if(t[i]===s[sindex]){
            sindex++
        }
    }
    return sindex === s.length
};

console.log(isSubsequence('abc','ahbgdc'));