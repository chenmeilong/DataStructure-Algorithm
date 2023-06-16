/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
//迭代法
// var levelOrder = function(root) {
//     if (!(root instanceof TreeNode)) return []
//     let matrix = []
//     let array = []
//     let queue = []
//     queue.push(root)
//     let layer=0
//     while(queue.length!=0){
//         layer++
//         const layerSize = queue.length
//         for(let i = 0; i < layerSize; i++){
//             let dequeue = queue.shift()
//             array.push(dequeue.val)
//             if(dequeue.left!=null) queue.push(dequeue.left)
//             if(dequeue.right!=null) queue.push(dequeue.right)
//         }
//         if(layer%2==0){array=array.reverse()}
//         matrix.push(array)
//         array=[]
//     }
//     return matrix
// };


//递归法
var levelOrder = function(root) {
    if (!(root instanceof TreeNode)) return []
    let matrix = []
    let countLayer = function(node,layer){
        if(matrix.length < layer+1){
            matrix.push([])
        }
        if(layer%2){
            matrix[layer].unshift(node.val)
        }else{
            matrix[layer].push(node.val)
        }
        if(node.left!=null) countLayer(node.left,layer+1)
        if(node.right!=null) countLayer(node.right,layer+1)
    }
    countLayer(root,0)
    return matrix
};