// 新建一个树
var mergeTrees = function(root1, root2) {
    if(root1==null || root2==null) return root1 || root2
    let node = new TreeNode(root1.val+root2.val)
    node.left = mergeTrees(root1.left,root2.left)
    node.right = mergeTrees(root1.right,root2.right)
    return node
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let root = new TreeNode(1)
root.left = new TreeNode(3)
root.left.left = new TreeNode(5)
root.right = new TreeNode(2)

let root2 = new TreeNode(2)
root2.left = new TreeNode(1)
root2.left.right = new TreeNode(4)
root2.right = new TreeNode(3)
root2.right.right = new TreeNode(7)

console.log(mergeTrees(root,root2));