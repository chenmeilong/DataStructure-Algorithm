
// 要不使用大的数组缓存记录
// 要不就得给新的状态表示之前的死活变化
var gameOfLife = function(board) {
    let source = []
    for(let i=0;i<board.length;i++){
        source.push(board[i].slice(0))
    }
    let  n = board.length
    let  m = board[0].length
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            // 一次对八个位置的活细胞统计
            let live = 0
            if(i>0 && j>0  && source[i-1][j-1]) live++
            if(i>0 && source[i-1][j]) live++
            if(i>0 && j<m-1  && source[i-1][j+1]) live++
            if(i>=0 && j>0  && source[i][j-1]) live++
            if(i>=0 && j<m-1  && source[i][j+1]) live++
            if(i<n-1 && j>0  && source[i+1][j-1]) live++
            if(i<n-1 && j>=0  && source[i+1][j]) live++
            if(i<n-1 && j<m-1  && source[i+1][j+1]) live++
            if(live<2) board[i][j]=0
            else if(live>3) board[i][j]=0
            else if(live===3) board[i][j]=1
        }
    }
    return board
};

// console.log(gameOfLife([[0,1,0],[0,0,1]]));
// console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));
console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));