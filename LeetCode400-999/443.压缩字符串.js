/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let num = 1
    let chart = chars[0]

    let left = 0 
    for(let i=1;i<=chars.length;i++){
        if(chars[i]!==chart){
            chars[left++] = chart
            if(num!==1) {
                let strNum = num.toString()
                for(let j=0;j<strNum.length;j++){
                    chars[left++] = strNum[j]
                }
            }
            chart = chars[i]
            num = 1
        }else num ++
    }
    chars.splice(left,chars.length-left)
    return left
};

console.log(compress(["a","a","b","c","c","c"]));