
// 暴力解法
// var minEatingSpeed = function(piles, h) {
//     let sum = piles.reduce((sum,num)=>sum+num,0)
//     let k = Math.ceil(sum/h)
//     let countH = Infinity
//     while(countH>h){
//         countH = 0
//         for(let i=0;i<piles.length;i++){
//             countH+=Math.ceil(piles[i]/k)
//         }
//         if(countH>h) k++
//     }
//     return k
// };

// 二分查找k
var minEatingSpeed = function(piles, h) {
    let sum = piles.reduce((sum,num)=>sum+num,0)
    let left = Math.ceil(sum/h)
    let right = Math.max(...piles)
    
    while(left<right){
        let mid = Math.floor((left+right)/2)
        let countH = 0
        for(let pile of piles){
            countH += Math.ceil(pile/mid)
        }
        if(countH>h){
            left = mid+1
        }else if(countH<=h){
            right = mid
        }
    }
    return left
};


console.log(minEatingSpeed([3,6,7,11],8));