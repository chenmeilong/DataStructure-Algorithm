var leafSimilar = function(root1, root2) {
    let leaf1 = []
    let leaf2 = []
    dfs(root1,leaf1)
    dfs(root2,leaf2)

    if(leaf1.length!==leaf2.length) return 0
    return  leaf1.toString()===leaf2.toString()

    function dfs(root,leaf){
        if(root.left===null && root.right===null){
            leaf.push(root.val)
            return null
        }
        if(root.left) dfs(root.left,leaf)
        if(root.right) dfs(root.right,leaf)
    }
};