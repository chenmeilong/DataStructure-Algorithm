

/**
 * @param {number} n
 * @return {number}
 */

//自己想的数学法
var findNthDigit = function(n) {
    if(n<10) return n
    n -= 10
    let position = 2
    let gain = 10
    let px = 9*gain*position

    while(n>px){
        n -= px
        gain *= 10
        position +=1
        px = 9*gain*position
    }
    // console.log(n,position,gain)
    return (Math.pow(10,position-1)+Math.floor(n/position)+'')[n%position]
};

console.log(findNthDigit(1020000000004))