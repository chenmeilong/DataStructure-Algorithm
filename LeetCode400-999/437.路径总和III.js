 // 自己写的dfs  还可以使用前缀和优化
// var pathSum = function(root, targetSum) {
//     let result = 0
//     let arr = dfs(root)
//     // console.log(arr);
//     return result
//     function dfs(node){
//         if(node===null) return []
//         let left = dfs(node.left)
//         let right = dfs(node.right)
//         let arr = [node.val]
//         for (let num of left) arr.push( node.val + num)
//         for (let num of right)  arr.push( node.val + num)
//         for (let num of arr) if(num===targetSum) result++
//         return arr
//     }
// };


// 前缀和
var pathSum = function(root, targetSum) {
    let count = 0 
    let preCount = [0]
    function dfs(node){
        if(node===null) return null
        if(preCount.length===0) preCount.push(node.val)
        else{
            let val = preCount[preCount.length-1] + node.val
            preCount.forEach(num=>val-num===targetSum?count++:null)
            preCount.push(val)
        }
        dfs(node.left)
        dfs(node.right)
        preCount.pop()
    }
    dfs(root)
    return count
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let root = new TreeNode(5)
root.left = new TreeNode(4)
root.left.left = new TreeNode(11)
root.left.left.left = new TreeNode(7)
root.left.left.right = new TreeNode(2)
// root.left.right = new TreeNode(2)
// root.left.right.right = new TreeNode(1)
root.right = new TreeNode(8)
root.right.left = new TreeNode(13)
root.right.right = new TreeNode(4)
root.right.right.left = new TreeNode(5)
root.right.right.right = new TreeNode(1)

console.log(pathSum(root,22));