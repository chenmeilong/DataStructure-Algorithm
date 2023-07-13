var convert = function(s, numRows) {
    if(numRows===1) return s
    let res = []
    for(let i=0;i<numRows;i++){
        let index = i
        let newS = ""
        while(index<s.length){
            newS+=s[index]
            let num = (numRows-i)*2-2
            index+=num?num:numRows*2-2
            if (s[index] && i>0 && i<numRows-1){
                newS+=s[index]
                index+=(i+1)*2-2
            }
        }
        res.push(newS)
    }
    return res.join('')
};

// console.log(convert(s = "PAYPALISHIRING", numRows = 4));
// console.log(convert(s = "PAYPALISHIRING", numRows = 3));
console.log(convert(s = "A", numRows = 1));