/**
 * @param {number[]} postorder
 * @return {boolean}
 */

//自己写的 递归+分治算法  效率比较低  可能是是数据数值拷贝导致，需要使用双指正解决
// var verifyPostorder = function(postorder) {
//     // console.log(postorder)
//     if (postorder.length<=1) return true
//     let index = postorder.length-2
//     while(postorder[index] > postorder[postorder.length-1] && index>=0){
//         index--
//     }
//     // console.log(index)
//     for(let i =0 ;i<=index ; i++){
//         if(postorder[i] >= postorder[postorder.length-1]) return false
//     }
//     return verifyPostorder(postorder.slice(0,index+1)) && verifyPostorder(postorder.slice(index+1,postorder.length-1))
// };

//  递归+分治算法  优化成指针  
var verifyPostorder = function(postorder) {
    return twoPointer(0,postorder.length)
    //左闭 右开
    function twoPointer(start,end){
        // console.log(start,end)
        if (end-start<=1) return true
        let index = end-2
        while(postorder[index] > postorder[end-1] && index>=0){
            index--
        }
        for(let i = start ;i<=index ; i++){
            if(postorder[i] >= postorder[end-1]) return false
        }
        return twoPointer(start,index+1) && twoPointer(index+1,end-1)
    }
};


//递归+分治算法 参考题解算法  比较巧妙  复杂度和我的一致 我的方法是从后往前  这里是从前往后
var verifyPostorder = function(postorder) {
    return twoPointer(0,postorder.length-1)
    //左闭 右闭
    function twoPointer(start,end){
        // console.log(start,end)
        if (end-start<=0) return true
        let index = start
        while(postorder[index] < postorder[end]){
            index++
        }
        let midian = index
        while(postorder[index] > postorder[end]){
            index++
        }
        return index==end && twoPointer(start,midian-1) && twoPointer(midian,end-1)
    }
};


// var verifyPostorder = function(postorder) {
//     return verify(0,postorder.length-1)
//     function verify(i,j){
//         if(j-i<2) return true
//         let index = j
//         while(postorder[j]<postorder[index-1]){
//             index--
//         }
//         for(let k = i ; k < index ; k++){
//             if (postorder[k]>postorder[j]) return false
//         }
//         return verify(i,index-1) && verify(index,j-1)
//     }
// };


console.log(verifyPostorder([1,6,3,2,5]))
console.log(verifyPostorder([1,3,2,6,5]))
console.log(verifyPostorder([4,8,6,16,14,10]))