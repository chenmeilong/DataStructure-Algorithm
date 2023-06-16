
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if(root===null) return []
    let arr = []
    dfs(root)
    function dfs(node){
        if(node===null){
            arr.push(null)
            return null
        }
        arr.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }
    return arr
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if(data[0]==null){
        data.shift()
        return null
    }
    let node = new TreeNode(data.shift())
    node.left = deserialize(data)
    node.right = deserialize(data)
    return node
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let root = new TreeNode(5)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(2)
root.right.left.left = new TreeNode(3) 
root.right.left.right = new TreeNode(1) 
root.right.right = new TreeNode(4)

// let root = new TreeNode(1)
// root.left = new TreeNode(2)
// root.left.left = new TreeNode(3)
// root.left.left.left = new TreeNode(4)
// root.left.left.left.left = new TreeNode(5)

console.log(deserialize(serialize(root)))
console.log(deserialize(serialize(null)))

