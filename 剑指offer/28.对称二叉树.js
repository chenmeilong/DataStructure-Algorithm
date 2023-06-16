// 对称二叉树

/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//将二叉树转换成它的镜像二叉树 ，在比较两次的镜像是否为一样的二叉树结构
//为前面两题的综合  自己写的。时间和空间都比较低
// var isSymmetric = function(root) {
//     let mirrorNode = transMirror(root)
//     console.log(mirrorNode)
//     return comparaNode(root,mirrorNode)

//     function comparaNode(node,mirrorNode){

//         if(mirrorNode===null) return true
//         if(node===null || mirrorNode.val!=node.val) return false
//         return comparaNode(node.left,mirrorNode.left) && comparaNode(node.right,mirrorNode.right)

//     }
//     //需要重新创建镜像树
//     function transMirror(root){
//         let mirrorRoot = null
//         if (root!=null){
//             mirrorRoot = new TreeNode(root.val)
//             let temp = transMirror(root.right)
//             mirrorRoot.right = transMirror(root.left)
//             mirrorRoot.left = temp
//         } 
//         return mirrorRoot
//     }
// };

//队列迭代法
// var isSymmetric = function(root) {
//     if (root==null || root.left==null && root.right==null){ return true}
//     let queue = []      //思想比较巧妙应当多加练习
//     queue.push(root.left)
//     queue.push(root.right)
//     while(queue.length>0){
//         let left  = queue.shift()
//         let right  = queue.shift()
//         if(left==null && right == null){continue}
//         if(left==null || right == null){return false}
//         if(left.val!=right.val){return false}
//         queue.push(left.left)
//         queue.push(right.right)
//         queue.push(left.right)
//         queue.push(right.left)
//     }
//     return true
// };

//递归法  思想巧妙得多加练习
// var isSymmetric = function(root) {
//     if(root==null || root.left==null && root.right==null) return true
//     return dfs(root.left,root.right)
//     function dfs(left,right){
//         if(left==null && right == null){
//             return true
//         }
//         if(left == null || right == null){
//             return false
//         }
//         if(left.val !=right.val){
//             return false
//         }
//         return dfs(left.left,right.right) && dfs(left.right,right.left)
//     }
// };




let A = new TreeNode(1)
A.left = new TreeNode(2)
A.left.left = new TreeNode(3)
A.left.right = new TreeNode(4)
A.right = new TreeNode(2)
A.right.left = new TreeNode(4)
A.right.right = new TreeNode(3)

console.log(isSymmetric(A))