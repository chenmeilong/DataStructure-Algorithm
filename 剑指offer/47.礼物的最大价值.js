/**
 * @param {number[][]} grid
 * @return {number}
 */
//动态规划
var maxValue = function(grid) {
    //为了提高速度 先将第一行和第一列计算完
    for (let i = 1; i< grid[0].length; i++){
        grid[0][i] += grid[0][i-1]
    }
    for (let i = 1; i< grid.length; i++){
        grid[i][0] += grid[i-1][0]
    }
    for(let i =1 ; i< grid.length; i++){
        for(let j = 1 ; j< grid[0].length; j++){
            grid[i][j] += Math.max(grid[i-1][j], grid[i][j-1])
        }
    }
    return grid[grid.length-1][grid[0].length-1]
};
console.log(maxValue([[1,3,2],[1,5,1],[4,2,1]]))