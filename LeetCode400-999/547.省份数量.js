var findCircleNum = function(isConnected) {
    let set = new Set() //记录遍历过的城市
    let res = 0 //记录身份个数

    const dfs = function(index){
         if(set.has(index)) return null
         set.add(index)
         for(let i=0;i<isConnected[index].length;i++ ){
             if(isConnected[index][i]===1){
                 dfs(i)
             }
         }
    }

    for(let i=0; i<isConnected.length; i++){
        if(!set.has(i)){
            res++
            dfs(i)
        }
    }
    return res
};