
var merge = function(nums1, m, nums2, n) {
    let left = m-1
    let right = n-1
    let index = m+n-1
    while(left>=0 || right>=0){
        // console.log(left,right,index,nums1);
        if(right<0 ||  nums1[left]>nums2[right]){
            nums1[index] = nums1[left]
            left--
        }else{
            nums1[index] = nums2[right]
            right--
        }
        index--
    }
    return nums1
};

console.log(merge(nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3));