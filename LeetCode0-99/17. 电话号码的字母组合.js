/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    if(digits.length === 0) return []
    let keyboard = [[],[],['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'],
                ['m','n','o'],['p','q','r','s'],['t','u','v'],['w','x','y','z'],]
    let res = []
    const digui = function(i,buff){
        if(i===digits.length){
            res.push(buff.join(''))
            return null
        }
        for(let chat of keyboard[parseInt(digits[i])]){
            buff.push(chat)
            digui(i+1,buff)
            buff.pop()
        }
    }
    digui(0,[])
    return res
};

console.log(letterCombinations('23'));