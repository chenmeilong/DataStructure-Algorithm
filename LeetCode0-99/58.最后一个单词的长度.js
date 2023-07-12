var lengthOfLastWord = function(s) {
    let left = -1
    let right = -1
    for(let i=s.length-1;i>=0;i--){
        if(right===-1 && s[i]!==' '){
            right = i
        }
        if(right!==-1 && s[i]===' '){
            left = i
            break
        }
    }
    return right-left
};