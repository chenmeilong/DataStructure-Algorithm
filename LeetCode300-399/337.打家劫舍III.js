// DP
// var rob = function(root) {
//     let mapf =new Map()
//     let mapg =new Map()
//     mapf.set(null,0)
//     mapg.set(null,0)
//     dfs(root)
//     return Math.max(mapf.get(root),mapg.get(root))
//     function dfs(node){
//         if(node === null) return
//         dfs(node.left)
//         dfs(node.right)
//         mapf.set(node,mapg.get(node.left) + mapg.get(node.right) + node.val)
//         mapg.set(node, Math.max(mapg.get(node.left),mapf.get(node.left)) + Math.max(mapg.get(node.right),mapf.get(node.right)))
//     }
// };
// DP空间优化
var rob = function(root) {
    return Math.max(...dfs(root))
    function dfs(node){
        if(node === null) return [0,0]
        let left = dfs(node.left)
        let right = dfs(node.right)
        let f = left[1] + right[1] + node.val
        let g = Math.max(...left) + Math.max(...right)
        return [f,g]
    }
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let A = new TreeNode(3)
A.left = new TreeNode(2)
A.left.right = new TreeNode(3)
A.right = new TreeNode(3)
A.right.right = new TreeNode(1)

console.log(rob(A));