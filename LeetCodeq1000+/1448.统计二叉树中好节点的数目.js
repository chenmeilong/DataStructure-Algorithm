
// 由栈的方式改进，优化掉了栈存储， 和every操作提升了速度
var goodNodes = function(root) {
    let count = 0
    const dfs  = (node,max)=>{
        if(node===null) return null
        if(max<=node.val){
            count++
            max = node.val
        }
        dfs(node.left,max)
        dfs(node.right,max)
    }
    dfs(root,-Infinity)

    return count
};