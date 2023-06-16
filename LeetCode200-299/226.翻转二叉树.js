
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// dfs
// var invertTree = function(root) {
//     if(root!=null){
//         [root.left,root.right] = [root.right,root.left]
//         invertTree(root.left)
//         invertTree(root.right)
//     }
//     return root
// };

// bfs
var invertTree = function(root) {
    if(root===null) return root
    let queue = []
    queue.push(root)
    while(queue.length){
        let length = queue.length
        for(let i = 0; i < length; i++){
            let node = queue.shift()
            let temp = node.left
            node.left = node.right
            node.right = temp
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }
    return root
};

let A = new TreeNode(4)
A.left = new TreeNode(2)
A.left.left = new TreeNode(1)
A.left.right = new TreeNode(3)
A.right = new TreeNode(7)
A.right.left = new TreeNode(6)
A.right.right = new TreeNode(9)

console.log(invertTree(A))

