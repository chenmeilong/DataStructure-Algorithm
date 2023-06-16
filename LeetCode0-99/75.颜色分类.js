/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */


function swap(arr,i,j){
    let buff = arr[i]
    arr[i] = arr [j]
    arr[j] = buff
}
//[0,p0)  全是0
//[p0,p1) 全是1
//[p1,i]  全是2  
//这种方式更好理解
var sortColors = function(nums) {
    let p0 = 0
    let p1 = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i]===0){
            swap(nums,i,p0)
            if (p0<p1) swap(nums,i,p1)
            p0++
            p1++
        }else if(nums[i]===1){
            swap(nums,i,p1)
            p1++
        }
    }
    return nums
};

//[0,p0)  全是0
//[p0,i) 全是1
//(p2,]  全是2
// var sortColors = function(nums) {
//     let p0 = 0
//     let p2 = nums.length-1
//     let i = 0
//     while(i<=p2){
//         while(i<=p2 && nums[i]===2){
//             swap(nums,i,p2)
//             p2--
//         }
//         if(nums[i]===0){
//             swap(nums,i,p0)
//             p0++
//         }
//         i++
//     }
//     return nums
// };


// console.log(sortColors([2,0,2,1,1,0])); 
console.log(sortColors([2,0,1])); 