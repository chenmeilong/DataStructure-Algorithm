var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies)
    let result = []
    candies.forEach((num)=>{
        if(num===maxCandies || num+extraCandies>=maxCandies) result.push(true)
        else result.push(false)
    })
    return result
};