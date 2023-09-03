var minDepth = function(root) {
    if(root===null) return 0
    const dfs = function(root,deep=1){
        if(root===null) return Infinity
        if(root.left===null && root.right===null) return deep
        return Math.min(dfs(root.left,deep+1),dfs(root.right,deep+1))
    }
    return dfs(root)
};