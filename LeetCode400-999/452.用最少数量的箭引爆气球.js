// 有了这样一个有用的断定，我们就可以快速得到一种最优的方法了。
// 考虑所有气球中右边界位置最靠左的那一个，那么一定有一支箭的射出位置就是它的右边界（否则就没有箭可以将其引爆了）。
// 当我们确定了一支箭之后，我们就可以将这支箭引爆的所有气球移除，
// 并从剩下未被引爆的气球中，再选择右边界位置最靠左的那一个，确定下一支箭，直到所有的气球都被引爆。
// 时间复杂度为n^2
// 可以继续优化为 n log n 先排列右端点


var findMinArrowShots = function(points) {
    // 先排序
    points.sort((a,b)=>a[1]-b[1])
    let res = 0
    while(points.length){
        let [start,end] = points[0]
        res ++
        let newPoint = []
        for(let i=0;i<points.length;i++){
            if(points[i][0]>end){
                newPoint.push(points[i])
            }
        }
        points = newPoint
    }
    return res
};

console.log(findMinArrowShots([[3,9],[7,12],[3,8],[6,8],[9,10],[2,9],[0,9],[3,9],[0,6],[2,8]]));

