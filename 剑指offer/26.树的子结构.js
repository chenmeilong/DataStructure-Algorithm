

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

//自己写的解法 先从A树找到B树的根节点，再递归同时遍历B树和A树对应节点
// var isSubStructure = function(A, B) {
//     if (!(B instanceof TreeNode)) return false
//     let findList = []
//     findNode(A,B)   //返回找到A中的节点 存放在缓存list中  找不到返回false 

//     let returnflag = false
//     for (let node of findList){
//         if(conmpare(node,B)){
//             returnflag = true
//         }
//     }
//     return returnflag
//     function conmpare(nodeA,nodeB){
//         if(nodeA.val!=nodeB.val) return false
//         if(nodeB.left !=null) {
//             if(nodeA.left != null){
//                 if(!conmpare(nodeA.left,nodeB.left)) return false
//             } 
//             else return false
//         }
//         if(nodeB.right !=null) {
//             if(nodeA.right != null){
//                 if(!conmpare(nodeA.right,nodeB.right)) return false
//             }
//             else return false
//         }
//         return true
//     }
//     function findNode(nodeA,nodeB){
//         if(nodeA.val == nodeB.val){
//             findList.push(nodeA)  
//         }
//         if(nodeA.left !=null)  find = findNode(nodeA.left,B)
//         if(nodeA.right !=null) find = findNode(nodeA.right,B)
        
//     }
// };


//看题解优化   复杂度时间复杂度比题解更低
// var isSubStructure = function(A, B) {
//     //若A、B不是TreeNode对象类型 则返回false
//     if (!(A instanceof TreeNode) || !(B instanceof TreeNode) ) return false
//     let findList = [] //可能会出现多个一样的B根节点所以要用list
//     findNode(A,B)   //返回找到A中的节点 存放在缓存list中 
//     let returnflag = false
//     findList.forEach( node => returnflag = (returnflag ||  conmpare(node,B)))
//     return returnflag

//     //这几行应该熟记于心，这是一般二叉树的 字树判断
//     //输入两树的根节点 B是子树
//     function conmpare(nodeA,nodeB){
//         if (nodeB===null) return true    
//         //当节点 B 为空：说明树 B 已匹配完成（越过叶子节点），因此返回 true ；
//         // 当节点 A 为空：说明已经越过树 A 的叶节点，即匹配失败，返回 false //当节点 A 和 B 的值不同：说明匹配失败，返回 false
//         if (nodeA===null || nodeA.val!=nodeB.val) return false 
//         return conmpare(nodeA.left,nodeB.left) && conmpare(nodeA.right,nodeB.right)  //左右节点同时判断
//     }
//     function findNode(nodeA,nodeB){
//         if(nodeA == null) return false
//         if(nodeA.val == nodeB.val) findList.push(nodeA)
//         findNode(nodeA.left,B)
//         findNode(nodeA.right,B)
//     }
// };


//答案  题解如上
var isSubStructure = function(A, B) {
    if(!A || !B) return false;// *A*
    return travesal(A,B) || isSubStructure(A.left,B) || isSubStructure(A.right,B);
};
function travesal(rootA,rootB){
    if(!rootB) return true;
    if(!rootA) return false;
    if(rootA.val !== rootB.val) return false;
    return travesal(rootA.left,rootB.left) && travesal(rootA.right,rootB.right);
}



function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
let A = new TreeNode(4)
A.left = new TreeNode(2)
A.left.left = new TreeNode(4)
A.left.left.left = new TreeNode(8)
A.left.left.right = new TreeNode(9)
A.left.right = new TreeNode(5)
A.right = new TreeNode(3)
A.right.left = new TreeNode(6)
A.right.right = new TreeNode(7)

let B = new TreeNode(4)
B.left = new TreeNode(8)
B.right = new TreeNode(9)

// let A = new TreeNode(-2)
// A.left = new TreeNode(1)

// let B = new TreeNode(-2)
// B.left = new TreeNode(1)
// B.right = new TreeNode(-1)
console.log(isSubStructure(A,B))