
// 有点像dp算法和dfs的结合  不断开辟数组空间则需要优化
var longestZigZag = function(root) {
    let res = 0
    const dfs = function(node){
        if(node === null) return [0,0]
        let left = dfs(node.left)
        let right = dfs(node.right)

        let l = left[1]+1
        let r = right[0]+1
        res = Math.max(res,l,r)
        return [l,r]
    }
    dfs(root)
    return res-1
};