/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//深度优先遍历
var exist = function(board, word) {
    let m = board.length
    let n = board[0].length
    let mask = new Array(m).fill(0).map(()=>new Array(n).fill(false))
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(board[i][j]===word[0]){
                if(findWord(i,j,0)) return true
            }
        }
    }
    return false
    function findWord(i,j,index){  //index指的是word的找的index
        if(i<0 || i>=m || j<0 || j>=n || mask[i][j] || board[i][j]!==word[index]){
            return false
        }
        mask[i][j] = true
        if(index===word.length-1){
            return true
        }
        let state = findWord(i-1,j,index+1) || findWord(i+1,j,index+1) || findWord(i,j-1,index+1) || findWord(i,j+1,index+1)
        mask[i][j] = false
        return state
    }
};    

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB"));

// console.log(exist( [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"))  //能过
// console.log(exist( [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"))
// console.log(exist( board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCB"))
// console.log(exist( board = [["a"]],"b"))
// console.log(exist( board = [["C","A","A"],["A","A","A"],["B","C","D"]],"AAB"))


console.log(exist( board = [["A","B","C","E"],["S","F","E","S"],["A","D","E","E"]],"ABCESEEEFS"))

