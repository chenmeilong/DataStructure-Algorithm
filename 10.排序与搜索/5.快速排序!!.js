// 快排  答案 简洁版  关键点改为中间点出现问题 
function quickSort(arr, left , right){
    if(left >= right) return
    let key = arr[left]  //选取关键点
    let i = left 
    let j = right
    while(i != j){
        while(arr[j] >= key && i<j) {
            j--
        }
        while(arr[i] <= key && i<j) {
            i++
        }
        if(i<j) {
            [arr[i],arr[j]] = [arr[j],arr[i]]
        } 
    }
    [arr[i],arr[left]] = [arr[left],arr[i]]

    //左边需要重新排序
    quickSort(arr, left , i-1)
    //右边需要重排序
    quickSort(arr, i+1 , right)
    return arr
}

// function quickSort(arr, left , right){
//     if(left >= right) return
//     let keyIndex = Math.floor((left+right)/2)
//     let key = arr[keyIndex]  //选取关键点为中间点
//     let i = left 
//     let j = right
//     while(i != j){
//         while(arr[j] >= key && i<j) {
//             j--
//         }
//         while(arr[i] <= key && i<j) {
//             i++
//         }
//         if(i<j) {
//             [arr[i],arr[j]] = [arr[j],arr[i]]
//         } 
//     }
//     [arr[i],arr[keyIndex]] = [arr[keyIndex],arr[i]]

//     //左边需要重新排序
//     quickSort(arr, left , i-1)
//     //右边需要重排序
//     quickSort(arr, i+1 , right)
//     return arr
// }

//自己写的快排   从小到大排序
let arr  = [5,7,9,4,8,3]
console.log(quickSort(arr, 0 , arr.length-1))