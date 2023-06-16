var isValid = function(s) {
    if(s.length%2) return false
    let stack = []
    for(let i = 0 ; i< s.length ; i++){
        if(s[i]=='(') stack.push(')')
        else if (s[i]=='[') stack.push(']')
        else if (s[i]=='{') stack.push('}')
        else{
            if (stack.pop()!=s[i]) return false
        }
    }
    return stack.length===0
};