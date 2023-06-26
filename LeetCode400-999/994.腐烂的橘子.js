// 腐烂的橘子，使用图广度优先搜索算法

var orangesRotting = function(grid) {
    let m = grid.length
    let n = grid[0].length

    let res = 0
    let queue = []  //存放烂橘子的队列
    // 找出初始状态所有的烂橘子 
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===2) queue.push([i,j])
        }
    }

    // 分两种情况来看 一种是永不腐烂-1，一种是没橘子腐烂了0
    if(queue.length===0){
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(grid[i][j]===1) return -1
            }
        }
        return 0
    }

    // 广度优先算法 ，开始扩散腐烂
    while(queue.length){
        res++
        let newQueue = []
        for(let [i,j] of queue){
            // 检查四个方向是否有新鲜橘子  注意边界
            if(j-1>=0 && grid[i][j-1]===1){
                grid[i][j-1]=2
                newQueue.push([i,j-1])
            }
            if(j+1<n && grid[i][j+1]===1){
                grid[i][j+1]=2
                newQueue.push([i,j+1])
            }
            if(i-1>=0 && grid[i-1][j]===1){
                grid[i-1][j]=2
                newQueue.push([i-1,j])
            }
            if(i+1<m && grid[i+1][j]===1){
                grid[i+1][j]=2
                newQueue.push([i+1,j])
            }
        }
        queue = newQueue
    }

    // 检查是否有用不腐烂的橘子
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===1) return -1
        }
    }
    return res - 1
};


console.log(orangesRotting([[0]]));
console.log(orangesRotting([[1]]));