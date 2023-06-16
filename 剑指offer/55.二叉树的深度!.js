/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

//广度优先  
// var maxDepth = function(root) {
//     if(root==null) return 0
//     let layer = 0
//     let queue =[]
//     queue.push(root)
//     while(queue.length > 0){
//         let queueLength = queue.length
//         layer++
//         for(let i=0 ; i<queueLength ; i++){
//             let dequeue = queue.shift()
//             if (dequeue.left!=null) queue.push(dequeue.left)
//             if (dequeue.right!=null) queue.push(dequeue.right)
//         }
//     }
//     return layer
// };

//深度优先
// var maxDepth = function(root) {
//     if (root == null) return 0
//     let maxLayer = 0
//     dfs(root,0)
//     function dfs(node, layer){
//         if (node==null) return 
//         maxLayer = layer>maxLayer ? layer : maxLayer 
//         dfs(node.left,layer+1)
//         dfs(node.right,layer+1)
//     }
//     return maxLayer+1
// };


//一种巧妙解法
var maxDepth = function(root) {
    function getNodeHeight(node){
        if (node==null) return 0
        return Math.max(getNodeHeight(node.left),getNodeHeight(node.right))+1
    }
    return getNodeHeight(root)
};


function Node(val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

let root = new Node(3,null,null)
root.left = new Node(9,null,null)
root.right = new Node(20,null,null)
root.right.left = new Node(15,null,null)
root.right.right = new Node(7,null,null)


console.log(maxDepth(root))