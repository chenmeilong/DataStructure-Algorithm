
// 二差搜索树
var deleteNode = function(root, key) {
    if(root===null) return null
    if(root.val > key){
        root.left = deleteNode(root.left,key)
    }else if(root.val < key){
        root.right = deleteNode(root.right,key)
    }else{
        // 删除当前节点
        // 1.当前root 为根节点 直接删除
        if(root.left===null && root.right===null) return null
        else if(root.left===null){
            // 2.left 节点为空
            return root.right
        }else if(root.right===null){
            // 3.right 节点为空
            return root.left
        }else{
            // 4.左右节点都不为空  找到左边最大的放在 要删除的root节点的位置
            let node = root.left
            while(node !== null && node.right!==null){
                node = node.right
            }
            root.val = node.val
            root.left = deleteNode(root.left,node.val)
            return root
        }
    }
    return root
};