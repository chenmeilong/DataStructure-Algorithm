
let b = 6
function guess(num){
    if(num<b) return 1
    else if(num>b) return -1
    else return 0
}

var guessNumber = function(n) {
    let left = 1
    let right = n
    
    while(left < right){
        let half = Math.floor((left+right)/2)
        if(guess(half)<=0){
            right = half
        }else{
            left = half+1
        }
    }
    return left
};

console.log(guessNumber(10));