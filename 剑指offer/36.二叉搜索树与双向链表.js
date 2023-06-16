/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    if (root == null) return root
    let head = null
    let predNode = root
    //中序遍历树
    function inOrderTree(root){
        if(root != null){
            inOrderTree(root.left)
            //中序遍历到的节点
            if (head ==null) {
                head = root
                predNode = root
            }
            else{
                predNode.right = root
                root.left = predNode
                predNode = root
            }
            inOrderTree(root.right)
        }
    }
    inOrderTree(root)
    predNode.right = head
    head.left = predNode
    //输出双向链表
    return head
};


function Node(val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

let root = new Node(4,null,null)
root.left = new Node(2,null,null)
root.left.left = new Node(1,null,null)
root.left.right = new Node(3,null,null)
root.right = new Node(5,null,null)

let head =treeToDoublyList(root)
console.log(head.val)
console.log(head.right.val)
console.log(head.left.val)

treeToDoublyList([])
