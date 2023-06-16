/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let mid = (nums1.length + nums2.length)/2-1

    let index1 = 0
    let index2 = 0

    let a
    while(index1+index2<=Math.ceil(mid)){
        a = getMin()   //.5 => 1位置 获取到第二个 num =2    // 1 => 1位置和 2位置  获取第二个和第三个  num=2
    }

    return mid%1?a:(a+getMin())/2

    //获取两个中较少的num
    function  getMin(){
        if(index2>=nums2.length || nums1[index1]<=nums2[index2]){
            index1++
            return nums1[index1-1]
        }
        else{
            index2++
            return nums2[index2-1]
        }
    }
};
console.log(findMedianSortedArrays([1,3],[2]));
// console.log(findMedianSortedArrays([0,0],[0,0]));