/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
//先排序，再合并 时间nlogn 空间1 返回不算空间
var merge = function(intervals) {
    let returnList = []
    intervals.sort((a,b)=>a[0]-b[0])
    returnList.push(intervals[0])
    for (let i = 1 ; i < intervals.length; i++) {
        //判断能不能和returnList的最后一个合并
        let last = returnList[returnList.length-1]
        if(last[1] >= intervals[i][0]){
            //可合并  last  和 intervals[i]
            last[1] = Math.max(last[1],intervals[i][1])
        }else{
            //不可合并
            returnList.push(intervals[i])
        }
    }
    return returnList
};
console.log(merge([[2,6],[1,3],[8,10],[15,18]]));