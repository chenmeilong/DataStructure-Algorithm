/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */


//dfs
// var movingCount = function(m, n, k) {
//     let status = new Array(m).fill(0).map( item => new Array(n).fill(false))
//     function count(num){
//         let countNum = 0
//         countNum += Math.floor(num/10)
//         countNum += num%10
//         return countNum
//     }
    
//     function dfs(i,j){
//         if(i<m &&j<n && count(i)+count(j) <= k && status[i][j] == false){
//             status[i][j] = true
//             return 1+dfs(i+1,j)+dfs(i,j+1)
//         }else return 0
//     }
//     return dfs(0,0)
// };

//bfs
var movingCount = function(m, n, k) {
    let status = new Array(m).fill(0).map( item => new Array(n).fill(false))
    function trans(num){
        let countNum = 0
        countNum += Math.floor(num/10)
        countNum += num%10
        return countNum
    }
    let count =0
    let queue = []
    queue.push([0,0])
    while(queue.length > 0){
        let point = queue.shift()
        let i = point[0]
        let j = point[1]
        if(i<m &&j<n && trans(i)+trans(j) <= k && status[i][j] == false){
            status[i][j] = true
            count++
            //添加两个 判断是是false
            if (i+1<m && status[i+1][j] == false) queue.push([i+1,j])
            if (j+1<n && status[i][j+1] == false) queue.push([i,j+1])
        }
    }
    return count
};

console.log(movingCount(2,3,1))
// console.log(movingCount(3,1,0))
// console.log(movingCount(38,15,9))