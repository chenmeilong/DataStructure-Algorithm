/**
 * @param {number[]} height
 * @return {number}
 */
//1.动态规划 左右扫描 单调队列 
// var trap = function(height) {
//     let leftArr = []
//     let rightArr = new Array(height.length)
//     let max = 0
//     for(let i = 0 ; i<height.length;i++){
//         max = Math.max(max,height[i])
//         leftArr.push(max)
//     }
//     max = 0
//     for(let i = height.length-1 ; i>=0;i--){
//         max = Math.max(max,height[i])
//         rightArr[i] = max
//     }
//     let count = 0

//     for(let i = 0 ; i<height.length;i++){
//         count += Math.min(leftArr[i],rightArr[i])-height[i]
//     }
//     return count
// }; 


//2.单调栈维护 左边柱子单调减。只要出现右边柱子比比栈顶的柱子大就一定出现水坑，这事需要计算水坑高度和宽度
// var trap = function(height) {
//     let area = 0
//     let stack =[]
//     for(let i = 0 ; i<height.length; i++){
//         while(stack.length && height[stack[stack.length-1]]<height[i]){
//             const top = stack.pop()
//             if (!stack.length) {
//                 break;
//             }
//             const left = stack[stack.length - 1];
//             const currWidth = i - left - 1;
//             const currHeight = Math.min(height[left], height[i]) - height[top];
//             area += currWidth * currHeight;
//         }
//         stack.push(i)
//     }
//     return area
// }; 


//3.双指针，因为动态规划左右扫描，所以这里可以用双指针代替扫描
// var trap = function(height) {
//     let ans = 0;
//     let left = 0, right = height.length - 1;
//     let leftMax = 0, rightMax = 0;
//     while (left < right) {
//         leftMax = Math.max(leftMax, height[left]);
//         rightMax = Math.max(rightMax, height[right]);
//         if (height[left] < height[right]) {
//             ans += leftMax - height[left];
//             ++left;
//         } else {
//             ans += rightMax - height[right];
//             --right;
//         }
//     }
//     return ans;
// };



// 单调栈
var trap = function(height) {
    let stack = []
    let res = 0
    for(let i=0;i<height.length;i++){
        while(height[stack[stack.length-1]]<height[i]){
            let pop = stack.pop()
            if(stack.length===0) break
            // 计算水坑
            res+=(Math.min(height[stack[stack.length-1]],height[i])-height[pop])*(i-stack[stack.length-1]-1)
        }
        stack.push(i)
    }
    // console.log(stack);
    return res
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));