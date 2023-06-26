var diameterOfBinaryTree = function(root) {
    let max = 0
    dfs(root)
    return max
    function dfs(node){
        if(node===null) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)
        max = Math.max(max,left+right)
        return Math.max(left, right)+1
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let root = new TreeNode(1)
root.left = new TreeNode(2)
root.left.left = new TreeNode(4)
root.left.right = new TreeNode(5)
root.right = new TreeNode(3)

console.log(diameterOfBinaryTree(root));