// Floyd-Warshall（弗洛依德） 算法是一种计算图中所有最短路径的动态规划算法，
// 我们可以找出从所有源到所有顶点的最短路径。


const floydWarshall = graph => {
    const dist = [];
    const length = graph.length;
    for (let i = 0; i < length; i++) { // 初始化
        dist[i] = [];
        for (let j = 0; j < length; j++) {
            if (i === j) {
                dist[i][j] = 0; //顶点到自身的距离为 0
            } else if (graph[i][j]==0) {
                dist[i][j] = Infinity; //如果两个顶点之间没有边，就将其表示为 Infinity即无穷大
            } else {
                dist[i][j] = graph[i][j]; //给初始值
            }
        }
    }
    for (let k = 0; k < length; k++) { // 将顶点 0 到 k 作为中间点
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) { //从 i 到 j 的最短路径经过 k
                    // 给出的公式用来计算通过顶点 k 的 i 和 j 之间的最短路径。
                    // 如果一个最短路径的新的值被找到，我们要使用并存储它
                    dist[i][j] = dist[i][k] + dist[k][j]; // {7}
                }
            }
        }
    }
    return dist;
};

//初始化邻接矩阵图，路径上还有权重值
var graph =[[0, 2, 4, 0, 0, 0],
            [0, 0, 2, 4, 2, 0],
            [0, 0, 0, 0, 3, 0],
            [0, 0, 0, 0, 0, 2],
            [0, 0, 0, 3, 0, 2],
            [0, 0, 0, 0, 0, 0]];
console.log('dist:',floydWarshall(graph))
