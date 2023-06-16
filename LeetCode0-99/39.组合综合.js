/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function(candidates, target) {
//     let returnList = []

//     digui([],0)
//     function digui(arr,sum){
//         if(sum===target){
//             returnList.push(arr)
//             return null
//         }
//         if(sum<target){
//             for(let i = 0 ; i<candidates.length; i++){
//                 if(sum+candidates[i]<=target){
//                     if(arr.length<1 || (arr.length>=1 && candidates[i]<=arr[arr.length-1])){
//                         let newArr = arr.slice(0)
//                         newArr.push(candidates[i])
//                         digui(newArr,sum+candidates[i])
//                     }
//                 }
//             }
//         }
//     }
//     return returnList
// };

//官方题解
var combinationSum = function(candidates, target) {
    const ans = [];
    dfs(target, [], 0);
    return ans;
    
    function dfs(target, combine, idx){
        if (idx === candidates.length) {
            return;
        }
        if (target === 0) {
            ans.push(combine);
            return;
        }
        // 直接跳过
        dfs(target, combine, idx + 1);
        // 选择当前数
        if (target - candidates[idx] >= 0) {
            dfs(target - candidates[idx], [...combine, candidates[idx]], idx);
        }
    }
};

console.log(combinationSum([2,3,6,7],7));