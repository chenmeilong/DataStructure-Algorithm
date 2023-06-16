//思路 初始化mask 遍历所有的格子
// 深度优先搜索 优化掉mask
var numIslands = function(grid) {
    let m = grid.length
    let n = grid[0].length
    let result = 0

    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==='1'){
                result++
                findIsland(i,j) //将当前链接的岛屿 置为0
            }
        }
    }
    return result

    function findIsland(i,j){ //每个格子的上下左右都要去找 直到找到当前格子为0   //dfs 改进使用bfs需要用栈模拟递归
        if(i<0 || i>=m || j<0 || j>=n || grid[i][j]==='0'){
            return 
        }
        grid[i][j] = '0'
        findIsland(i-1,j)
        findIsland(i+1,j)
        findIsland(i,j-1)
        findIsland(i,j+1)
    }
};

console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]));

