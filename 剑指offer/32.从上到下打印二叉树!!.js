
// 从上到下按层打印二叉树，同一层的节点按从左到右的顺序打印，每一层打印到一行。


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

//看题解写的  迭代法
var levelOrder = function(root) {
    if (!(root instanceof TreeNode)) return []
    let matrix =[]
    let array = [] //缓存数组
    let queue =[]  //缓存队列
    queue.push(root)
    while(queue.length!=0){
        const queueLength = queue.length
        for(let i=0; i<queueLength; i++){
            let dequeue = queue.shift()
            array.push(dequeue.val)
            if(dequeue.left!=null) queue.push(dequeue.left)
            if(dequeue.right!=null) queue.push(dequeue.right)
        }
        matrix.push(array)
        array = []

    }
    return matrix
};


//递归法
var levelOrder = function(root) {
    if (!(root instanceof TreeNode)) return []
    let matrix =[]  //缓存返回二维数组
    helper(root,0)
    function helper(node,level){
        if(!node) return
        if(!matrix[level]){
            matrix[level] = [node.val]
        }else{
            matrix[level].push(node.val)
        }
        let left =node.left
        let right = node.right
        helper(left,level+1)
        helper(right,level+1)
    }
    return matrix
};