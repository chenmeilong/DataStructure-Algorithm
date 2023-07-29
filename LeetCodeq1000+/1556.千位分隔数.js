var thousandSeparator = function(n) {
    let strn = n.toString()
    let res = []
    let i=strn.length-1
    while(i>=0){
        let j=3
        let str = ''
        while(j>0 && i>=0){
            str=strn[i]+str
            j--
            i--
        }
        res.push(str)
    }
    return res.reverse().join('.')

};