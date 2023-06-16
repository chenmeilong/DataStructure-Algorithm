/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!(typeof digits === 'string') || digits.length<1) return []
    let returnList = []
    let map = {
        1:[''],
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z'],
    }

    digui('',digits)
    return returnList

    function digui(str,digits){
        if(digits.length===1){
            map[+digits].forEach(numStr=>{
                returnList.push(str+numStr)
            })
            return null
        }
        map[+digits[0]].forEach(numStr=>{
            digui(str+numStr,digits.slice(1))
        })
    }
};

console.log(letterCombinations('23'));