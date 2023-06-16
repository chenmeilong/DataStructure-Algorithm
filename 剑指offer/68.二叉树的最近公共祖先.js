

//自己写的深度优先搜索到两个节点 并记录路径

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


// 答案的解法 比较巧妙 需要考虑到每种情况
var lowestCommonAncestor = function(root, p, q) {
    let ans;
    const dfs = (root, p, q) => {
        if (root === null) return false;
        const lson = dfs(root.left, p, q);
        const rson = dfs(root.right, p, q);
        if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
            ans = root;
        } 
        return lson || rson || (root.val === p.val || root.val === q.val);
    }
    dfs(root, p, q);
    return ans;
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
