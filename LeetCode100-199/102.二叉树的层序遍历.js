var levelOrder = function(root) {
    if(root===null) return []
    let result = []
    let queue = []
    queue.push(root)
    while(queue.length){
        let len = queue.length
        let arr = []
        while(len--){
            let node = queue.shift()
            arr.push(node.val)
            if(node.left!==null) queue.push(node.left)
            if(node.right!==null) queue.push(node.right)
        }
        result.push(arr)
    }
    return result
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let root = new TreeNode(3)
root.left = new TreeNode(9)
root.right = new TreeNode(20)
root.right.left = new TreeNode(15)
root.right.right = new TreeNode(7)

console.log(levelOrder(root));