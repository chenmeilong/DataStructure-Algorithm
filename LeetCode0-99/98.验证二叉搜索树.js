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
 * @return {boolean}
 */
//中序遍历
// var isValidBST = function(root) {
//     let arr =  []
//     return digui(root)
//     function digui(root){
//         if(root===null) return true
//         let left = digui(root.left)

//         if(root.val<=arr[arr.length-1]){
//             return false
//         }
//         arr.push(root.val)
//         let right = digui(root.right)
//         return left &&  right
//     }
// };

//递归
var isValidBST = function(root) {
    return digui(root,null,null)
    function digui(root,down,up){
        if(root===null) return true
        let val = root.val
        if(down!==null && val<=down) return false
        if(up!==null && val>=up) return false
        return digui(root.left,down,val) && digui(root.right,val,up)
    }
};
           
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let root = new TreeNode(5)
root.left = new TreeNode(4)
root.right = new TreeNode(6)
// root.right.left = new TreeNode(3)
root.right.right = new TreeNode(7)

console.log(isValidBST(root));