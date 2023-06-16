
var buildTree = function(preorder, inorder) {
    return digui(0,preorder.length,0,inorder.length)
    function digui(pS,pE,iS,iE){  //左闭右开
        if(pS>=pE || iS>=iE) return null
        let root = new TreeNode(preorder[pS])
        let index
        for(let i = iS;i<=iE;i++){
            if(inorder[i]===preorder[pS]){
                index = i
                break
            }
        }
        root.left = digui(pS+1,pS+1+index-iS,iS,index)
        root.right = digui(pS+1+index-iS,pE,index+1,iE)
        return root
    }
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

console.log(buildTree([3,9,20,15,7],[9,3,15,20,7]));