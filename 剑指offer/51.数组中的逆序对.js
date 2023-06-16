



/**
 * @param {number[]} nums
 * @return {number}
 */

//自己写的归并计数法
var reversePairs = function(nums) {
    if(nums.length==0) return 0
    let count = 0
    mergeSort(nums)
    function mergeSort(arr){
        if(arr.length==1) return arr

        let mid = Math.floor(arr.length/2)
        let left  = mergeSort(arr.slice(0,mid))
        let right = mergeSort(arr.slice(mid))
        //归并
        let i = 0
        let j = 0

        let newArr = []
        // console.log()
        while(i<left.length || j<right.length){
            if(j>=right.length || left[i]>right[j]){
                newArr.push(left[i])
                count = count + (right.length-j)  //等于加上后面所有比前面该数字小的数
                i++
            }else{
                newArr.push(right[j])
                j++
            }
        }
        return newArr

    }
    return count
};

console.log(reversePairs([7,5,6,4]))
