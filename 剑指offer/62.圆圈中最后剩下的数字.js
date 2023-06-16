/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
//暴力解法  超时
// var lastRemaining = function(n, m) {
//     let list = []
//     let index = 0
//     for(let i=0; i<n; i++){
//         list.push(i)
//     }
//     while(list.length>1){
//         for(let i=0; i<m-1 ; i++){
//             index++
//             if(index>=list.length){
//                 index%=list.length
//             }
//         }
//         list.splice(index,1)
//         // console.log(list,index)
//     }
//     return list[0]
// };


//数学+递归 时间空间都是O(n)
// var lastRemaining = function(n, m) {
//     if(n==0){
//         return 0
//     }
//     let x = lastRemaining(n-1,m)
//     return (x+m)%n
// };

//递归改迭代
var lastRemaining = function(n, m) {
    let f = 0
    for(let i=2 ; i< n+1 ;i++){
        f = (m+f)%i
    }
    return f
};

console.log(lastRemaining(5,3))
console.log(lastRemaining(10,17))