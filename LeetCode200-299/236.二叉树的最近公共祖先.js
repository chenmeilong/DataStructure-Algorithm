// dfs结合返回值  这里可以继续优化 使用return 2 找到了就快速递归，但是好像没有快很多
// var lowestCommonAncestor = function(root, p, q) {
//     let find
//     dfs(root)
//     return find
//     function dfs(node){
//         if(node===null) return false
//         let left = dfs(node.left)
//         let right = dfs(node.right)
//         if(left && right || ((node===p || node===q) && (left||right))){
//             find = node
//             return true
//         }
//         else if(left || right || node===p || node===q) return true
//         else return false
//     }
// };

function Node(val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
};

let root = new Node(6,null,null)
root.left = new Node(2,null,null)
root.right = new Node(8,null,null)
root.left.left = new Node(0,null,null)
root.left.right = new Node(4,null,null)
root.left.right.left = new Node(3,null,null)
root.left.right.right = new Node(5,null,null)

root.right.right = new Node(9,null,null)
root.right.left = new Node(7,null,null)

console.log(lowestCommonAncestor(root,root.left.right ,root.right.left))
