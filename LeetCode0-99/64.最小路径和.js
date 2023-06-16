/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length
    let n = grid[0].length

    let dpm = new Array(m).fill(0)
    let dpn = new Array(n).fill(0)
    dpm[0] = grid[0][0]
    dpn[0] = grid[0][0]

    for(let j = 1 ; j<n; j++){
        dpn[j] = grid[0][j] + dpn[j-1]
    }
    for(let i = 1 ; i<m ; i++){
        dpm[i] = grid[i][0] + dpm[i-1]
    }

    for(let i = 1 ; i<m ; i++){
        for(let j = 1 ; j<n; j++){
            dpn[j] = Math.min(grid[i][j] + dpn[j],grid[i][j] + dpm[i])
            dpm[i] = dpn[j] 
        }
    }
    return dpn[n-1]
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));