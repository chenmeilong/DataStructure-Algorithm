

// 暴力 过了 99.2%   题解用的并查集  
var maximumSafenessFactor = function(grid) {
    let m = grid.length
    let n = grid.length
    
    // 找到所有的 小偷点
    let steal = []
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]===1) steal.push([i,j])
        }
    }
    // 计算每个格子的 曼哈顿距离
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            grid[i][j] = steal.reduce((dis,s)=>Math.min(dis,Math.abs(i-s[0]) + Math.abs(j-s[1])),Infinity)
        }
    }
    
    // 注意查看是否计算正确
    // console.log(grid)
    
    // 使用DP计算出 每个格子的安全系数
    // 先确定好第一列和第一行
    for(let i=1;i<m;i++){
        grid[i][0] = Math.min(grid[i-1][0],grid[i][0])
    }
    for(let j=1;j<n;j++){
        grid[0][j] = Math.min(grid[0][j-1],grid[0][j])
    }
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            grid[i][j] = Math.min(Math.max(grid[i-1][j],grid[i][j-1]),grid[i][j])
        }
    }
    return grid[m-1][n-1]
}; 