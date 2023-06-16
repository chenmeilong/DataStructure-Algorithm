//递归 node。val为当前子节点中最大链条值
// var maxPathSum = function(root) {
//     let result = -10000
//     dfs(root)
//     console.log(root);
//     return result

//     function dfs(node){
//         if(node===null) return null
//         dfs(node.left)
//         dfs(node.right)
//         let right = node.right?node.right.val:0
//         let left = node.left?node.left.val:0
//         let val  = node.val
//         node.val = Math.max(node.val,node.val+left, node.val+right)
//         right = node.right?node.right.val:-10000
//         left = node.left?node.left.val:-10000
//         result = Math.max(result,node.val,val+ left + right,right,left)
//     }
// };

//递归，返回值为当前子节点中值最大的链条 
var maxPathSum = function(root) {
    let result = -10000
    dfs(root)
    return result

    function dfs(node){
        if(node===null) return 0
        let left = Math.max(dfs(node.left),0)
        let right = Math.max(dfs(node.right),0)

        let sum = node.val + left + right
        result = Math.max(result,sum)
        return node.val+Math.max(left,right)
    }
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let root = new TreeNode(-10)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
// root.left.left = new TreeNode(11)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)
// root.right.right.right = new TreeNode(1)
// root.left.left.left = new TreeNode(7)
// root.left.left.right = new TreeNode(2)

console.log(maxPathSum(root));