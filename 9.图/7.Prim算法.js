// Prim (普利姆)算法是一种求解加权无向连通图的 MST （最小生成树）问题的贪心算法。
// 它能找出某种边的子集，使得其构成的树包含图中所有顶点，且边的权值之和最小。

const INF = Number.MAX_SAFE_INTEGER;

const prim = graph => {
    const parent = []; //记录连通最小的父节点
    const key = [];  //记录连通各个点的最短路径
    const visited = [];  //遍历个顶点的记录  记录的false和true
    const length = graph.length;
    for (let i = 0; i < length; i++) { // 初始化 路径为最大值
        key[i] = INF;
        visited[i] = false; //初始化所有位置为未探索
    }
    key[0] = 0; // 相当于MST的根节点
    parent[0] = -1; //？？
    for (let i = 0; i < length - 1; i++) { //找出其余顶点的最短路径
        const u = minKey(key, visited); //从尚未处理的顶点中选出距离最近的顶点
        visited[u] = true; //把选出的顶点标为true，以免重复计算。
        for (let v = 0; v < length; v++) {
            //如果得到更小的权值，则保存 MST 路径
            if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) { // {6}
                parent[v] = u; //记录连通最小的父节点
                key[v] = graph[u][v]; // {8}记录路径长度
            }
        }
    }
    return {parent,key}; // 处理完所有顶点后，返回包含 MST 的结果。
};

//从尚未处理的顶点中选出距离最近的顶点。
const minKey = (dist, visited) => {
    let min = INF;
    let minIndex = -1;
    for (let v = 0; v < dist.length; v++) {   //遍历dist
        if (visited[v] === false && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
};


var graph =[[0, 2, 4, 0, 0, 0],
            [2, 0, 2, 4, 2, 0],
            [4, 2, 0, 0, 3, 0],
            [0, 4, 0, 0, 3, 2],
            [0, 2, 3, 3, 0, 2],
            [0, 0, 0, 2, 2, 0]];
console.log(prim(graph));  //parent是父节点到对应的顺序节点的距离
