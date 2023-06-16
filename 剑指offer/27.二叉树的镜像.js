
//二叉树镜像


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//自己写的  简单题练练手速   递归题先找截止条件   这是一种深度优先DFS
//时间复杂度O（n）  空间复杂度O（树深度）
// var mirrorTree = function(root) {
//     if (root!=null){
//         //交换左右节点
//         [root.left,root.right] = [root.right,root.left]
//         mirrorTree(root.left)
//         mirrorTree(root.right)
//     }
//     return root
// };

//看题解 缩写到一行代码解题
var mirrorTree = function(root) {
    if (root!=null) [root.left,root.right] = [mirrorTree(root.right),mirrorTree(root.left)]
    return root
};

//广度优先 BFS  迭代+队列
var mirrorTree = function(root) {
    if (root==null) return null
    let queue = []
    queue.push(root)
    while(queue.length){
        let layerSize = queue.length
        for(let i = 0 ; i < layerSize; i++){
            let node = queue.shift()
            let temp  = node.right       //不清楚这个为什么不能一行交换
            node.right = node.left
            node.left = temp

            if(node.left!=null){queue.push(node.left)}
            if(node.right!=null){queue.push(node.right)}
        }
    }
    return root
};



let A = new TreeNode(4)
A.left = new TreeNode(2)
A.left.left = new TreeNode(1)
A.left.right = new TreeNode(3)
A.right = new TreeNode(7)
A.right.left = new TreeNode(6)
A.right.right = new TreeNode(9)

console.log(mirrorTree(A))

