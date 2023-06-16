var gcdOfStrings = function(str1, str2) {
    // 先求出长度的最大公约数  使用辗转相除法
    let num = gcd(str1.length, str2.length)
    let result = str1.slice(0,num)
    return str1+str2===str2+str1?result:''
    function gcd(a,b){
        while(b){
            [a,b] = [b,a%b]
        }
        return a
    }
};