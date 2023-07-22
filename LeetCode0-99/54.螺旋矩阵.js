/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [matrix[0][0]]
    matrix[0][0]= undefined
    // 每走过一个元素 赋值为undedined
    let i = 0
    let j = 0

    let dir = [0,1]
    while(true){
        // 先检查当前方向的位置是否有值
        // console.log(matrix[i+dir[1]]!==undefined && matrix[i+dir[1]][j+dir[0]]);
        if( matrix[i+dir[0]]!==undefined && matrix[i+dir[0]][j+dir[1]]!==undefined){
            // 有值，则直接在当前方向上+1
            i+=dir[0]
            j+= dir[1]
            res.push(matrix[i][j])
            matrix[i][j] = undefined
        }else{
            //需要变更方向
            if(j<matrix[0].length-1 && matrix[i][j+1]!==undefined){
                dir = [0,1]
            }else if(i<matrix.length-1 && matrix[i+1][j]!==undefined){
                dir = [1,0]
            }else if(j>0 && matrix[i][j-1]!==undefined){
                dir = [0,-1]
            }else if(i>0 && matrix[i-1][j]!==undefined){
                dir = [-1,0]
            }else{
                return res
            }
        }
    }
};
// console.log( spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
console.log( spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));