// 法1 哈希map  时间复杂度为nlogn
// var topKFrequent = function(nums, k) {
//     let map = new Map()
//     nums.forEach((num)=>map.set(num,(map.get(num) || 0) +1))
//     let arr = []
//     for(let item of map){
//         arr.push(item)
//     }
//     arr.sort((a,b)=>b[1]-a[1])
//     let result =[]
//     for(let i=0;i<k;i++){
//         result.push(arr[i][0])
//     }
//     return result
// }; 

// 法2 哈希map+小顶堆

console.log(topKFrequent([1,1,1,2,2,3],2));