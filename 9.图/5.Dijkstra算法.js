//Dijkstra 迪杰斯特拉 算法是一种计算从单个源到所有其他源的最短路径的贪心算法

//初始化邻接矩阵图，路径上还有权重值
var graph =[[0, 2, 4, 0, 0, 0],
            [0, 0, 2, 4, 2, 0],
            [0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 2],
            [0, 0, 0, 3, 0, 2],
            [0, 0, 0, 0, 0, 0]];

const INF = Number.MAX_SAFE_INTEGER;  //JavaScript 中最大的安全整数 2^53 - 1


//参数为矩阵图 src开始的位置

const dijkstra = (graph, src) => {
    const dist = [];  //记录到达各个点的最短路径
    const visited = [];  //遍历个顶点的记录  记录的false和true
    const length = graph.length;
    for (let i = 0; i < length; i++) { // 初始化  将路径设置为最大值
        dist[i] = INF;
        visited[i] = false;
    }
    dist[src] = 0; //顶点到自己的距离设置为0
    for (let i = 0; i < length - 1; i++) { // 要找出到其余顶点的最短路径。
        const u = minDistance(dist, visited); //从尚未处理的顶点中选出距离最近的顶点。
        visited[u] = true; // 把选出的顶点标为 visited，以免重复计算。
        for (let v = 0; v < length; v++) {
            if (!visited[v] && graph[u][v] !== 0 && 
                dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) { // {6}
                dist[v] = dist[u] + graph[u][v]; ///如果找到更短的路径，则更新最短路径的值
            }
        }
    }
    return dist; // 返回到各顶点的最短路径
};

//从尚未处理的顶点中选出距离最近的顶点。
const minDistance = (dist, visited) => {
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


console.log('dist:',dijkstra(graph, 0))

