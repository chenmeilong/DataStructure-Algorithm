/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let searchValue 
    search(root)
    function search(root){
        if(root!=null){
            search(root.right)
            k--
            if(k==0) searchValue = root.val
            search(root.left) 
        }
        return 0
    }
    return searchValue
};

function Node(val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
};
let root = new Node(3,null,null)
root.left = new Node(1,null,null)
root.left.right = new Node(2,null,null)
root.right = new Node(4,null,null)


console.log(kthLargest(root,1))