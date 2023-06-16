/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */

//自己写的深度优先算法  速度慢
// var pathSum = function(root, target) {
//     if (root==null && target==0) return []
//     let returnList =[]
//     dfs(root, 0, [])
//     //深度优先
//     function dfs(node,sum,buff){
//         if(node != null){
//             //计算一下
//             buff = buff.slice(0)  //深copy
//             buff.push(node.val)
//             sum += node.val
            
//             if(node.left==null && node.right!=null){
//                 dfs(node.right, sum, buff)
//             }
//             else if(node.left!=null && node.right==null){
//                 dfs(node.left, sum, buff)
//             }else{
//                 dfs(node.left, sum, buff)
//                 dfs(node.right, sum, buff)
//             }
//         }else{
//             if(sum == target && !returnList.includes(buff)){
//                 returnList.push(buff)
//             }
//         }
//     }
//     return returnList
// };


// 参考答案深度优先
var pathSum = function(root, target) {
    let returnList =[]
    dfs(root,[],returnList,target)
    function dfs(node,buff,returnList,target){
        if(node == null) return
        buff.push(node.val)
        target -= node.val
        if(target==0 && node.left==null && node.right==null){
    
            returnList.push(buff.slice(0))
        }
        dfs(node.left,buff,returnList,target)
        dfs(node.right,buff,returnList,target)
        buff.pop()
    }
    return returnList
};

//广度优先自己写


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let root = new TreeNode(5,null,null)
root.left = new TreeNode(4,null,null)
root.left.left = new TreeNode(11,null,null)
root.left.left.left = new TreeNode(7,null,null)
root.left.left.right = new TreeNode(2,null,null)

root.right = new TreeNode(8,null,null)
root.right.left = new TreeNode(13,null,null)
root.right.right = new TreeNode(4,null,null)
root.right.right.left = new TreeNode(5,null,null)
root.right.right.right = new TreeNode(1,null,null)


console.log(pathSum(root,22))