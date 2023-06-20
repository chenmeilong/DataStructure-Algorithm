/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
//自己写的按层模拟
// var spiralOrder = function(matrix) {
//     if (matrix.length==0) return matrix
//     let list =[]
//     let height = matrix.length
//     let width = matrix[0].length

//     if(height==1){
//         for(let i=0 ; i<width;i++){
//             list.push(matrix[0][i])
//         }
//         return list
//     }
//     let x = 0
//     let y = 0
//     while(height>0 && width>0){
//         // console.log(height,width,x,y)
//         //一圈里面的四个for循环
//         for(let i = x;i<x+width;i++){
//             list.push(matrix[y][i])
//         }
//         width--
//         x= x + width
//         // console.log('',list,x,y,width,height)
//         if(width<0 || height<0) break
        
//         for(let i = y+1;i<y+height;i++){
//             list.push(matrix[i][x])
//         }
//         height--
//         y= y + height

//         if(width<0 || height<0) break

//         for(let i = x-1;i> x-width;i--){
//             list.push(matrix[y][i])
//         }
//         x= x - width
//         width--

//         if(width<0 || height<0) break
//         for(let i = y;i> y-height;i--){
//             list.push(matrix[i][x])
//         }
//         height--
//         y= y - height
//         x++
//     }

//     return list
// };


// 法一 模板矩阵 标准写法
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    const rows = matrix.length, columns = matrix[0].length;
    const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));  //初始化二维矩阵 mask
    const total = rows * columns;
    const order = new Array(total).fill(0);

    let directionIndex = 0, row = 0, column = 0;
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (let i = 0; i < total; i++) { 
        order[i] = matrix[row][column];
        visited[row][column] = true;
        const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
        if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))) {
            directionIndex = (directionIndex + 1) % 4;
        }
        row += directions[directionIndex][0];
        column += directions[directionIndex][1];
    }
    return order;
};



// console.log(spiralOrder([[3],[2]]))
console.log(spiralOrder([[6,9,7],]))
// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
// console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))