/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


// 类似自己写的递归算法 时间空间效率都很低   结合人家程序优化
var buildTree = function(preorder, inorder) {
    if (preorder.length==0 && preorder.length==0) return null
    let nodeVal = preorder.shift()   //拿到根节点
    let node = new TreeNode(nodeVal)
    let index = inorder.indexOf(nodeVal)

    node.left =  buildTree(preorder.slice(0,index),inorder.slice(0,index))
    node.right =  buildTree( preorder.slice(index),inorder.slice(index+1))
    return node
};


// 哈希map和指针优化，减少数据拷贝
var buildTree = function (preorder, inorder) {
    let hashMap = new Map()
    inorder.forEach((num,index)=>{
        hashMap.set(num,index)
    })
    return digui(0,preorder.length,0,inorder.length)

    function digui(pStart,pEnd, iStart,iEnd) {
        if(pEnd-pStart === 0 && iEnd-iStart === 0) return null
        else if (pEnd-pStart === 1 && iEnd-iStart === 1) return new TreeNode(preorder[pStart]);
      
        let value = preorder[pStart];
        let index = hashMap.get(value);
        let length = index-iStart

        let node = new TreeNode(value);
        node.left = digui(pStart+1,pStart+1 + length,iStart, index);
        node.right = digui(pStart+1 + length , pEnd ,index+1,iEnd);
        
        return node;
      };
};

//法二 迭代法  比较巧妙



console.log(buildTree([3,9,20,15,7],[9,3,15,20,7]))
// console.log(buildTree([-1],[-1]))
// console.log(buildTree([1,2],[2,1]))