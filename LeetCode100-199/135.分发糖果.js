
// 根据相邻评分搞有更多的糖果，左右计算后取最大值
var candy = function(ratings) {
    let n = ratings.length
    let arr = new Array(n).fill(0)
    arr[0] = 1
    for(let i = 1;i<n;i++){
        if(ratings[i]>ratings[i-1]){
            arr[i] = arr[i-1]+1
        }else{
            arr[i] = 1
        }
    }
    let sum = 0
    let right = 1
    for(let i=n-1;i>=0;i--){
        if(i<n-1 && ratings[i]>ratings[i+1]){
            right = right + 1
        }else{
            right = 1
        }
        sum+=Math.max(arr[i],right)
    }
    return sum
};

console.log(candy([1,0,2]));
console.log(candy([1,2,2]));