// DP 优先戳爆两边乘积最大的气球(思路错误)
// 倒着看，从最后一个戳爆的气球看起   从小区间慢慢扩展到大区间，有点贪心算法思想
var maxCoins = function(nums) {
    // 首尾+1
    nums.push(1)
    nums.unshift(1)
    let n = nums.length
    let store = new Array(n).fill(0).map(()=>new Array(n).fill(0))

    for(let len=2; len<n; len++) {  //区间长度
        for(let i=0; i<n-len;i++){
            range_best(i,i+len)
        }
    }
    console.log(store);
    return store[0][n-1]
    function range_best(i,j){
        let m = 0
        // #k是(i,j)区间内最后一个被戳的气球  
        for(let k=i+1;k<j;k++){ //k取值在(i,j)开区间中
            // #以下都是开区间(i,k), (k,j)
            let left = store[i][k]
            let right = store[k][j]
            let a = left + nums[i]*nums[k]*nums[j] + right
            m = Math.max(m,a)
        }
        store[i][j] = m
    }
};
console.log(maxCoins([3,1,5,8]));