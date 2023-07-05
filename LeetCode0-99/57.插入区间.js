
// 思维不要局限于二分，当然可以尝试o(n)复杂度的做法，那个更加快更简单用哪个
var insert = function(intervals, newInterval) {
    if(intervals.length===0) return [newInterval]
    let min = newInterval[0]
    let max = newInterval[1]
    let indexmin = 100000
    let indexmax = -1
    for(let i=0;i<intervals.length;i++){
        if(intervals[i][1]<newInterval[0] || intervals[i][0]>newInterval[1]) continue
        else{
            min = Math.min(min,intervals[i][0])
            max = Math.max(max,intervals[i][1])
            indexmin = Math.min(indexmin,i)
            indexmax = Math.max(indexmax,i)
        }
    }
    // console.log(indexmin,indexmax-indexmin+1);
    // 没有交集，需要在适当位置插入
    if(indexmin===100000 && indexmax === -1){
        if(newInterval[0]<intervals[0][0]){
            // 左边插入
            indexmin = 0
            indexmax = -1
        }else if(newInterval[0]>intervals[intervals.length-1][0]){
            indexmin = intervals.length
            indexmax = intervals.length-1
        }else{
            let index = 0
            for(let i=0;i<intervals.length-1;i++){
                if(newInterval[0]>intervals[i][0] && newInterval[0]<intervals[i+1][0]){
                    index = i
                }
            }
            indexmin = index+1
            indexmax = index
        }
    }
    intervals.splice(indexmin,indexmax-indexmin+1,[min,max])
    return intervals
};


// console.log(insert([[1,3],[6,9]],[2,5]));
// console.log(insert([[1,5]],[0,0]));
console.log(insert([[3,5],[12,15]],[6,6]));
// console.log(insert([],[5,7]));
// console.log(insert([[1,5]],[2,7]));