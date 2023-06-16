
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//递归
var isSymmetric = function(root) {
    return digui(root.left,root.right)
    function digui(left,right){
        if(left===null && right===null) return true  //是null
        if(left===null || right===null || left.val!==right.val) return false
        return digui(left.right,right.left)&&digui(left.left,right.right)
    }
};

//迭代  里面的交换小技巧还没有掌握
// var isSymmetric = function(root) {
//     let queue = []
//     queue.push(root.left)
//     queue.push(root.right)
//     while(queue.length){
//         let left = queue.shift()
//         let right = queue.shift()
//         if(left===null && right===null) continue  //是null
//         if(left===null || right===null || left.val!==right.val) return false
//         queue.push(left.left)
//         queue.push(right.right)
//         queue.push(left.right)
//         queue.push(right.left)
//     }
//     return true
// };

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// let root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.right = new TreeNode(2)
// root.left.left = new TreeNode(3)
// root.left.right = new TreeNode(4)
// root.right.left = new TreeNode(4)
// root.right.right = new TreeNode(3)

let root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)

console.log(isSymmetric(root));