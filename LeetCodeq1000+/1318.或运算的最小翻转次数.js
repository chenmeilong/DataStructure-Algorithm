var minFlips = function(a, b, c) {
    let max= Math.max(a,b,c)
    let res = 0
    while(max){
        if(c&1){
            // a、b最低位或运算结果为1。则a为1或b为1、ab都为1
            if((a&1)===0 && (b&1)===0) res++
        }else{
            // a、b最低位或运算结果为0，ab都为0
            if(a&1) res++
            if(b&1) res++
        }
        a>>=1
        b>>=1
        c>>=1
        max>>=1
    }
    return res
};

console.log(minFlips(2,6,5));