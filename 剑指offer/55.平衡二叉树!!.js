/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

//自己写的自顶向下递归
var isBalanced = function(root) {
    if (root==null) return true
    function getNodeHeight(node){
        if (node==null) return 0
        return Math.max(getNodeHeight(node.left),getNodeHeight(node.right))+1
    }

    let leftDeep = getNodeHeight(root.left)
    let rightDeep =getNodeHeight(root.right)
    if (Math.abs(leftDeep-rightDeep)>=2){
        return false
    }
    else if (leftDeep >2 || rightDeep>2){
        return isBalanced(root.left) && isBalanced(root.right)
    }
    return true
};


//参考答案 自顶向下递归 其实就是自己写的合体版
//是自顶向下递归，因此对于同一个节点，函数 \texttt{height}height 会被重复调用，导致时间复杂度较高。
//如果使用自底向上的做法，则对于每个节点，函数 \texttt{height}height 只会被调用一次。
// var isBalanced = function(root) {
//     if (root==null) return true
//     function getNodeHeight(node){
//         if (node==null) return 0
//         return Math.max(getNodeHeight(node.left),getNodeHeight(node.right))+1
//     }
//     return Math.abs(getNodeHeight(root.left) - getNodeHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
// };


//自底向上的做法 避免重複計算
var isBalanced = function(root) {
    function getNodeHeight(node){
        if (node==null) return 0
        let leftDeep = getNodeHeight(node.left)
        let rightDeep =getNodeHeight(node.right)
        if (leftDeep ==-1 || rightDeep ==-1 || Math.abs(leftDeep-rightDeep) > 1){
            return -1
        }else{
            return Math.max(leftDeep, rightDeep) + 1
        }
    }
    return getNodeHeight(root) >=0
};

function Node(val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

// let root = new Node(3,null,null)
// root.left = new Node(9,null,null)
// root.right = new Node(20,null,null)
// root.right.left = new Node(15,null,null)
// root.right.right = new Node(7,null,null)

let root = new Node(1,null,null)
root.left = new Node(2,null,null)
root.right = new Node(2,null,null)
root.left.left = new Node(3,null,null)
root.right.right = new Node(3,null,null)
root.left.left.left = new Node(4,null,null)
root.right.right.left = new Node(4,null,null)


console.log(isBalanced(root))