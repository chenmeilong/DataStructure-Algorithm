var removeStars = function(s) {
    let str = ''
    let startCount = 0
    for(let i = s.length-1 ;i>=0;i--){
        if(s[i]==='*'){
            startCount++
        }
        else if(startCount>0){
            startCount--
        }else{
            str = s[i] + str
        }
    }
    return str
}; 


console.log(removeStars('leet**cod*e'));
console.log(removeStars('abb*cdfg*****x*'));