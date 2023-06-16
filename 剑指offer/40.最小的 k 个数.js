


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
//法一 暴力排序截取
// var getLeastNumbers = function(arr, k) {
//     arr.sort((a,b)=>a-b)
//     return arr.slice(0,k)
// };


//法二 循环找到最小
// var getLeastNumbers = function(arr, k) {
//     let returnList =[]
//     for(let i=0 ; i<k ; i++){
//         let min = arr[0]
//         for(let j=0; j<arr.length;j++){
//             if( min > arr[j]){
//                 min =arr[j]
//             }
//         }
//         arr.splice(arr.indexOf(min),1)
//         returnList.push(min)
//     }
//     return returnList
// };

//法三 自己想的 基于快速排序的数组划分 （答案的最佳解法）
//快排思想
var getLeastNumbers = function(arr, k) {
    return quickSort(arr,0,arr.length-1).slice(0,k)
    function quickSort(arr,left,right){
        if(left >= right) return null;
        let key = arr[left]
        let i = left
        let j =right

        while(i<j){
            while(arr[j]>=key && i<j) j--
            while(arr[i]<=key && i<j) i++
            if(i<j) [arr[i],arr[j]] = [arr[j],arr[i]]
        }
        [arr[i],arr[left]] = [arr[left],arr[i]]
        if(i<k){
            quickSort(arr,i+1,right)
            
        }else if(i>k){
            quickSort(arr,left,i-1)
        }
        return arr
    }
};

console.log(getLeastNumbers([3,2,1],2))
console.log(getLeastNumbers([0,1,2,1],1))
console.log(getLeastNumbers([0,0,1,2,4,2,2,3,1,4],8))

console.log(getLeastNumbers([0,1,1,1,4,5,3,7,7,8,10,2,7,8,0,5,2,16,12,1,19,15,5,18,2,2,22,15,8,22,17,6,22,6,22,26,32,8,10,11,2,26,9,12,9,7,28,33,20,7,2,17,44,3,52,27,2,23,19,56,56,58,36,31,1,19,19,6,65,49,27,63,29,1,69,47,56,61,40,43,10,71,60,66,42,44,10,12,83,69,73,2,65,93,92,47,35,39,13,75],75))
