
//自己写的广度优先遍历超时
// 参考答案写的深度优先遍历

// var serialize = function(root) {
//     if(root==null) return []
//     let arr = []
//     dfs(root)
//     //深度优先 先序遍历
//     function dfs(node){
//         if(node==null) {
//             arr.push(null)
//             return null
//         }
//         arr.push(node.val)
//         dfs(node.left)
//         dfs(node.right)
//     }
//     return arr
// };

// var deserialize = function(data) {
//     if(data[0]==null){
//         data.shift()
//         return null
//     }
//     const root = new TreeNode(data.shift())
//     root.left = deserialize(data)
//     root.right = deserialize(data)
//     return root
// };



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

