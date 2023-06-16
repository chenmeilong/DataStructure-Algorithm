var canPlaceFlowers = function(flowerbed, n) {
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i]){
            flowerbed[i-1] = false
            flowerbed[i+1] = false
        }
    }
    let count = 0
    for(let i=0;i<flowerbed.length;i++){
        if(flowerbed[i]===0){
            count++
            flowerbed[i-1] = false
            flowerbed[i+1] = false
        }
    }
    return count>=n
};


console.log(canPlaceFlowers([1,0,0,0,1],1));