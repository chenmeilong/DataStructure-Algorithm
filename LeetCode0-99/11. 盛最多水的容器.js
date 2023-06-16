
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(!(height instanceof Array) || height.length<2) return 0
    let left = 0
    let right = height.length - 1
    let area = (right - left ) * Math.min(height[left],height[right])

    while(right > left){
        if(height[left]>height[right]) right--
        else left++
        area = Math.max((right - left ) * Math.min(height[left],height[right]),area)
    }
    return area
};

//剪枝后
// var maxArea = function(height) {
//     if(!(height instanceof Array) || height.length<2) return 0
//     let left = 0
//     let right = height.length - 1
//     let area = (right - left ) * Math.min(height[left],height[right])

//     while(right > left){
//         if(height[left]>height[right]) {
//             let a = height[right]
//             right--
//             while(right > left && a>height[right]){
//                 right--
//             }
//         }
//         else {
//             let a = height[left]
//             left++
//             while(right > left && a>height[left]){
//                 left++
//             }
//         }
//         area = Math.max((right - left ) * Math.min(height[left],height[right]),area)
//     }
//     return area
// };


console.log(maxArea([1,8,6,2,5,4,8,3,7]));