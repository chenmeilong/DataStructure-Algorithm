
//迭代先序遍历 修改
// var flatten = function(root) {
//     let stack = []
//     stack.push(root)
//     let pre = null
//     while(stack.length){
//         let node = stack.pop()
//         if(!node){
//             let a = stack.pop()
//             if(pre!==null){
//                 pre.left = null
//                 pre.right = a
//             }
//             pre = a
//             continue
//         }
//         if(node.right) stack.push(node.right)
//         if(node.left) stack.push(node.left)
//         stack.push(node)
//         stack.push(null)
//     }
//     return root
// };

//空间为1的巧妙解法  寻找前驱节点
var flatten = function(root) {
    let curr = root;
    while (curr !== null) {
        if (curr.left !== null) {
            const next = curr.left;
            let predecessor = next;  //前驱节点 最右节点
            while (predecessor.right !== null) {
                predecessor = predecessor.right;
            }
            predecessor.right = curr.right;  //对接上右子树
            curr.left = null;
            curr.right = next;
        }
        curr = curr.right;
    }
    return root
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(5)
root.left.left = new TreeNode(3)
root.left.right = new TreeNode(4)
root.right.right = new TreeNode(6)

console.log(flatten(root));