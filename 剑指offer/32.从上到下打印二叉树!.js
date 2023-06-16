

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var levelOrder = function(root) {
    let array = []
    let queue = []     //队列

    queue.push(root)
    while(queue[0]){
        let dequeue = queue.shift()
        array.push(dequeue.val)
        if(dequeue.left!=null) queue.push(dequeue.left)
        if(dequeue.right!=null) queue.push(dequeue.right)
    }
    return array
};
