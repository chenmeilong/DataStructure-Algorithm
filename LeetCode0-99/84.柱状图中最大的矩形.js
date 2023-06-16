/**
 * @param {number[]} heights
 * @return {number}
 */
//暴力会超时
//中心扩散法：
//使用单调栈，维护出高度小于i的柱子和右边高度小于i的柱子。计算面积的最下值
// var largestRectangleArea = function(heights) {
//     let len = heights.length
//     let left = new Array(len)  //维护的是index
//     let right = new Array(len) //维护的是index
//     let stack = [] //维护的是index

//     for(let i = 0 ; i <len;i++){
//         while(stack.length>0 && heights[i]<=heights[stack[stack.length-1]]){
//             stack.pop()
//         }
//         stack.push(i)
//         if(stack[stack.length-2]===undefined) left[i]=-1
//         else left[i] = stack[stack.length-2]
//     }
//     // console.log(left);
//     stack = [] 
//     for(let i = len-1 ; i >=0;i--){
//         while(stack.length>0 && heights[i]<=heights[stack[stack.length-1]]){
//             stack.pop()
//         }
//         stack.push(i)
//         if(stack[stack.length-2]===undefined) right[i]=len
//         else right[i] = stack[stack.length-2]
//     }
//     // console.log(right);

//     let max=0
//     for(let i = 0 ; i <len;i++){
//         max = Math.max((right[i]-left[i]-1)*heights[i],max)
//     }
//     return max
// };

//继续优化 单调栈 + 常数优化  出栈时候就是右边界确定的时候 计算完右边界还可直接结算面积  一次遍历即可出于结果
var largestRectangleArea = function(heights) {
    let len = heights.length
    let stack = [-1] //维护的是index  初始为-1 方便计算
    let max = 0
    let left = new Array(len)  
    for(let i = 0 ; i <len;i++){
        while(stack.length>1 && heights[i]<=heights[stack[stack.length-1]]){
            let top = stack.pop()
            max = Math.max((i-left[top]-1)*heights[top],max)
        }
        stack.push(i)
        left[i] = stack[stack.length-2]
    }
    while(stack.length>1){
        let top = stack.pop()
        max = Math.max((len-left[top]-1)*heights[top],max)
    }
    return max
};

console.log(largestRectangleArea([6,7,5,2,4,5,9,3]));

