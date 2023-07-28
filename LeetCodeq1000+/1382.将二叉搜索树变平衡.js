// 贪心算法，旋转节点代码太多了
// 中序排列后，中间点值做根节点，左右两边分别开始复制一个新的平衡二叉树
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var balanceBST = function(root) {
    function getInorder(o){
        if (o.left)  getInorder(o.left)
        inorderSeq.push(o.val)
        if (o.right) getInorder(o.right)
    }
    function build(l, r){
        let mid = (l + r)>>1
        let o = new TreeNode(inorderSeq[mid])
        if (l <= mid - 1)
            o.left = build(l, mid - 1)
        if (mid + 1 <= r)
            o.right = build(mid + 1, r)
        return o
    }
    let inorderSeq = []
    getInorder(root) //中序遍历
    return build(0, inorderSeq.length - 1)
};

let root = new TreeNode(1)
root.right = new TreeNode(2)
root.right.right = new TreeNode(3)
root.right.right.right = new TreeNode(4)

console.log(balanceBST(root));