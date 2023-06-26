var convertBST = function(root) {
    let sum = 0
    dfs(root)
    return root
    function dfs(node){
        if(node===null) return null
        dfs(node.right)
        node.val = node.val+sum
        sum = node.val
        dfs(node.left)
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let root = new TreeNode(4)
root.left = new TreeNode(1)
root.left.left = new TreeNode(0)
root.left.right = new TreeNode(2)
root.left.right.right = new TreeNode(3)
root.right = new TreeNode(6)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(7)
root.right.right.right = new TreeNode(8)

console.log(convertBST(root,8));