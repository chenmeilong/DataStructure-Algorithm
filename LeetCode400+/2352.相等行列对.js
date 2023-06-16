var equalPairs = function(grid) {
    let count= 0
    let n = grid.length
    let m = grid[0].length
    let hangStr =  []
    let lieStr = []
    for(let i = 0 ; i< n ; i++){
        let str = ''
        for(let j = 0 ; j < m ; j++){
            str+=grid[i][j]+','
        }
        hangStr.push(str)
    }
    for(let j = 0 ; j< m ; j++){
        let str = ''
        for(let i = 0 ; i < n ; i++){
            str+=grid[i][j]+','
        }
        lieStr.push(str)
    }
    // console.log(hangStr,lieStr);
    for(i = 0 ; i < n ; i++){
        count+=lieStr.filter((str)=>str===hangStr[i]).length
    }
    return count
};

console.log(equalPairs([[11,1],[1,11]]));