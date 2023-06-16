// 迭代版本
// 前序遍历：中左右
// 前序遍历 压栈顺序：右左中
// var flatten = function(root) {
//     let res = []
//     const stack = [];
//     if (root) stack.push(root);
//     while(stack.length) {
//         const node = stack.pop();
//         if(!node) {
//             res.push(stack.pop().val);
//             continue;
//         }
//         if (node.right) stack.push(node.right); // 右
//         if (node.left) stack.push(node.left); // 左
//         stack.push(node); // 中 这个位置更改就行  这是统一代码
//         stack.push(null);
//     }; 
//     return res;
// };


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