
// 法一 dfs
// var searchBST = function(root, val) {
//     if(root === null) return null 
//     if(root.val === val) return root
//     let left = searchBST(root.left,val)
//     let right = searchBST(root.right,val)
//     return left || right
// };

// 二叉搜索树 优化
var searchBST = function(root, val) {
    let node  = root
    while(node){
        if(node.val === val) return node
        else if(node.val > val){
            node = node.left
        }else{
            node = node.right
        }
    }
    return null
};