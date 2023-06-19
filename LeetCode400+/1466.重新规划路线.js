

// 建立双向图 ，在使用广度优先搜索，找到所有需要修改的路线
// 注意在js中使用原生 object会更快 ，map会带来额外的开销
// bfs效率优于dfs

var minReorder = function(n, connections) {
    let map = {}
    // 简历双向图
    for(let [a,b] of connections){
        if(map[a]){
            map[a].push([b,1])
        }else{
            map[a] = [[b,1]]
        }
        if(map[b]){
            map[b].push([a,0])
        }else{
            map[b] = [[a,0]]
        }
    }
    console.log(map);
    // 从0开始广度优先搜索   
    // 试试深度优先搜索
    let res = 0
    let set = new Set()  //可优化成原生数组，效率能更快
    const dfs = function(city){
        set.add(city)
        for(let [c,coast] of map[city]){
           if(!set.has(c)){
                res += coast
                dfs(c)
           }
        }
    }
    dfs(0)
    return res
}; 

console.log(minReorder(6,[[0,1],[1,3],[2,3],[4,0],[4,5]]))