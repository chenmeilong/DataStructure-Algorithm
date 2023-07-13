
var reverseWords = function(s) {
    let right = s.length
    let left = s.length-1
    let res = []
    while(left>=0){
        if(left===0 || s[left-1]===' '){
            let newStr = s.slice(left,right).trim()
            if(newStr!=='') res.push(newStr)
            right = left
        }
        left--
    }
    return res.join(' ')
};

console.log(reverseWords('a good   example'));