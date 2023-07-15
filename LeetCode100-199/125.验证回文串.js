
// 回文都做烂：双指针，栈，reverse，三种做法
var isPalindrome = function(s) {
    let left = 0
    let right = s.length-1
    
    while(left<right){
        let leftStr = s[left].toLocaleLowerCase()
        let rightStr = s[right].toLocaleLowerCase()

        if(leftStr===rightStr){
            left++
            right--
        }else if(!(leftStr>='a' && leftStr<='z' || leftStr>='0' && leftStr<='9')){
            left++
        }else if(!(rightStr>='a' && rightStr<='z' || rightStr>='0' && rightStr<='9')){
            right--
        }
        else{
            return false
        }
    }
    return true
};

console.log(isPalindrome(s = "0P"));
