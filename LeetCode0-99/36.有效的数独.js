

var isValidSudoku = function(board) {
    let set = new Set()
    // 行检查
    for(let i=0; i<9;i++){
        for(let j=0;j<9;j++){
            if(set.has(board[i][j]) && board[i][j]!=='.'){
                return false
            }
            else set.add(board[i][j])
        }
        set.clear()
    }

    // 列检查
    for(let i=0; i<9;i++){
        for(let j=0;j<9;j++){
            if(set.has(board[j][i]) && board[j][i]!=='.') {
                return false
            }
            else set.add(board[j][i])
        }
        set.clear()
    }

    // 3*3检查
    for(let i=0; i<3;i++){
        for(let j=0;j<3;j++){
            for(let m=0;m<3;m++){
                for(let n=0;n<3;n++){
                    if(set.has(board[3*i+m][3*j+n]) && board[3*i+m][3*j+n]!=='.') return false
                    else set.add(board[3*i+m][3*j+n])
                }
            }
            set.clear()
        }
    }
    return true
};

let board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board));