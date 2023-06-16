/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//递归
// var inorderTraversal = function(root) {
//     let result = []
//     dfs(root)
//     return result
//     function dfs(node){
//         if (node===null) return
//         dfs(node.left)
//         result.push(node.val)
//         dfs(node.right)
//     }
// };
//迭代  模拟递归过程
var inorderTraversal = function(root) {
    let stack = []
    let result = [] 
    let node = root
    while(node || stack.length){
        while(node){
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        result.push(node.val)
        node = node.right
    }
    return result
};


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.left = new TreeNode(3)

console.log(inorderTraversal(root));