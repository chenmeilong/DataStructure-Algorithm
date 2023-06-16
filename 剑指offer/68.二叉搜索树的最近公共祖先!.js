

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

//这不是最佳解法 没有利用好二差搜索树的特点
// var lowestCommonAncestor = function(root, p, q) {
//     //一遍循环记录 两个节点的 父节点 和本节点  从上到下一次比较  速度慢 需要全部遍历
//     // 找到  p 和 q
//     let roadLists =[]
//     let road =[]
//     dfs(root)
//     function dfs(node){
//         if (node == null) return null
//         road.push(node)
//         if(node == p || node==q) roadLists.push(road.slice(0))
//         dfs(node.left)
//         dfs(node.right)
//         road.pop()
//     }
//     let sameNode = null
//     for(let i=0 ; i<roadLists[0].length ; i++){
//         if(roadLists[0][i] == roadLists[1][i]) {
//             sameNode = roadLists[0][i]
//         }
//     }
//     return sameNode
// };

//两次遍历 二叉搜索树 找到路径
// var lowestCommonAncestor = function(root, p, q) {
//     function getPath(root,target){
//         let path = []
//         let node =root
//         path.push(root)
//         while(node != target){
//             if(target.val > node.val){
//                 path.push(node.right)
//                 node =  node.right
//             }
//             else if(target.val < node.val){
//                 path.push(node.left)
//                 node =  node.left
//             }
//         }
//         return path
//     }
//     let pathP = getPath(root,p)
//     let pathQ = getPath(root,q)
//     let sameNode
//     for(let i = 0 ; i < pathP.length ; i++){
//         if(pathP[i] == pathQ[i]){
//             sameNode = pathP[i]
//         }
//     }
//     return sameNode
// };


//本题最优解 两个节点一起搜索
var lowestCommonAncestor = function(root, p, q) {
    let node = root
    while(1){
        if(node.val > p.val && node.val> q.val){
            node = node.left
        }
        else if(node.val < p.val && node.val < q.val){
            node = node.right
        }else break
    }
    return node
};





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