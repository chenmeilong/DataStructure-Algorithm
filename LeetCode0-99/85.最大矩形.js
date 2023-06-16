/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    for(let j=0;j<n;j++){
        for(let i=0;i<m;i++){
            if(i>0 && matrix[i][j]==='1') matrix[i][j] = +matrix[i-1][j]+1
            else matrix[i][j]=+matrix[i][j]
        }
    }
    //计算每一行面积的最大值 使用单调栈 与 84题一致
    let area = 0
    for(let i=0;i<m;i++){
        let arr = matrix[i]
        //n
        let stack = [-1]
        let left = new Array(n)
        let max = 0

        for(j=0;j<n;j++){
            while(stack.length>1 && arr[j]<=arr[stack[stack.length-1]]){
                let top = stack.pop()
                max = Math.max((j-left[top]-1)*arr[top],max)
            }
            stack.push(j)
            left[j] = stack[stack.length-2]
        }
        while(stack.length>1){
            let top = stack.pop()
            max = Math.max((n-left[top]-1)*arr[top],max)
        }
        area = Math.max(max,area)
    }
    return area
};

console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));