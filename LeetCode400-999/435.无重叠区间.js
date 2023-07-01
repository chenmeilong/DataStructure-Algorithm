

var eraseOverlapIntervals = function(intervals) {
    let n = intervals.length
    intervals.sort((a,b)=>b[0]-a[0])
    let buff = [intervals[0]]
    while(intervals.length){
        let pop = intervals.pop()
        let bufftop = buff[buff.length-1]
        if(pop[0] >= bufftop[1]){
            buff.push(pop)
        }else{
            // 相等保小不保大
            buff[buff.length-1][1] = Math.min(bufftop[1],pop[1])
        }
    }
    // console.log(n,buff.length);
    return n-buff.length
};

console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]]));