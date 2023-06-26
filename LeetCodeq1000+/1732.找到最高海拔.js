var largestAltitude = function(gain) {
    let max =  0
    let sum = 0
    gain.forEach(cha=>{
        sum+=cha
        max = Math.max(max,sum)
    })
    return max
};