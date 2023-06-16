

/**
 * @param {number} target
 * @return {number[][]}
 */
//自己写的 类似滑动窗口
// var findContinuousSequence = function(target) {
//     let sum = 1
//     let list =[1]
//     let returnList =[]
//     for(let i = 2 ; i<= Math.ceil(target/2) ; i++) {
//         sum+=i
//         list.push(i)
//         // console.log(i,list,sum)
//         while(sum>target){
//             sum-=list.shift()
//         }
//         // console.log(sum)
//         if(sum==target){
//             returnList.push(list.slice(0))   //深拷贝
//         }
//     }
//     return returnList
// };

//答案优化 双指针记录其实与结束位置 时间换空间
var findContinuousSequence = function(target) {
    let left=1
    let right=1
    let sum = 1
    let returnList =[]
    for(let i = 2 ; i<= Math.ceil(target/2) ; i++) {
        sum+=i
        right++
        // console.log(i,list,sum)
        while(sum>target){
            sum-=left
            left++
        }
        // console.log(sum)
        if(sum==target){
            let buff = []
            for(let i=left;i<=right;i++){
                buff.push(i)
            }
            returnList.push(buff) 
        }
    }
    return returnList
};

//数学方法 等差数列求和公式
// var findContinuousSequence = function(target) {
//     let  returnlist =[]
//     for(let i = 1 ; i< Math.ceil(target/2); i++){
//         let right = (Math.pow(1-4*(i-i*i-2*target),1/2)-1)/2  //注意这里的公式推断
//         let list = []
//         if(right%1==0){
//             for(let j = i; j<=right; j++){
//                 list.push(j)
//             }
//             returnlist.push(list)
//         }
//     }
//     return returnlist
// };

console.log(findContinuousSequence(9))
console.log(findContinuousSequence(15))
