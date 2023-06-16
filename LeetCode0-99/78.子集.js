/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let result = []
    let buff = []
    dfs(0)
    return result

    function dfs(cur){  
        if(cur===nums.length){
            result.push(buff.slice(0))
            return null
        }
        buff.push(nums[cur])// 考虑选择当前位置
        dfs(cur+1) 
        buff.pop()        // 考虑不选择当前位置
        dfs(cur+1)
    }
};


//二进制解法  因为刚好是0-2的长度n次方
// var subsets = function(nums) {
//     let result = []
//     for(let i=0; i<1<<nums.length; i++){
//         let arr = []
//         for(j = 0 ; j < nums.length; j++){
//             if(i>>j&1) arr.push(nums[j])
//         }
//         result.push(arr)
//     }
//     return result            
// };
console.log(subsets([1,2,3]));