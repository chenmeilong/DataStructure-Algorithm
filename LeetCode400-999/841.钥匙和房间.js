
// 深度优先算法
var canVisitAllRooms = function(rooms) {
    let set = new Set() // 记录探索过的房间
    const dfs = function(i){
        if(set.has(i)) return null
        set.add(i)
        for(let index of rooms[i]){
            dfs(index)
        }
    }
    dfs(0)
    return set.size === rooms.length
};


console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));