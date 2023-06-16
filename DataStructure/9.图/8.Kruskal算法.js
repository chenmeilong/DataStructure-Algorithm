//?????????没有看透彻  结果有错误 感觉代码有问题，需要再捋一捋

// 和 Prim 算法类似，Kruskal 算法也是一种求加权无向连通图的 MST 的贪心算法。

const INF = Number.MAX_SAFE_INTEGER;  //JavaScript 中最大的安全整数 2^53 - 1

//find 函数的定义。它能防止 MST 出现环路。
const find = (i, parent) => {
    while (parent[i]) {
        i = parent[i];
    }
    return i;
};

const union = (i, j, parent) => {
    if (i !== j) {
        parent[j] = i;
        return true;
    }
    return false;
};

const kruskal = graph => {
    const length = graph.length;
    const parent = [];
    let ne = 0;
    let a; let b; let u; let v;
    const cost = graph; // 注意这里应该是深copy
    while (ne < length - 1) { // 当 MST 的边数小于顶点总数减 1 时。
        for (let i = 0, min = INF; i < length; i++) { // 找出权值最小的边。
            for (let j = 0; j < length; j++) {
                if (cost[i][j] < min) {
                    min = cost[i][j];
                    a = u = i;
                    b = v = j;
                }
            }
        }
        u = find(u, parent); //检查 MST 中是否已存在这条边，以避免环路。
        v = find(v, parent); //
        if (union(u, v, parent)) { //如果 u 和 v 是不同的边，则将其加入 MST。
            ne++;
        }
        cost[a][b] = cost[b][a] = INF; //从列表中移除这些边，以免重复计算。
    }
    return parent;  //返回 MST。
};

var graph =[[0, 2, 4, 0, 0, 0],
            [2, 0, 2, 4, 2, 0],
            [4, 2, 0, 0, 3, 0],
            [0, 4, 0, 0, 3, 2],
            [0, 2, 3, 3, 0, 2],
            [0, 0, 0, 2, 2, 0]];


const parent=kruskal(graph)


console.log('Edge   Weight');
for (let i = 1; i < graph.length; i++) {
    console.log(parent[i] + ' - ' + i + '   ' + graph[i][parent[i]]);
}

// Edge   Weight
// 07-Kruskal.js:18 0 - 1   2
// 07-Kruskal.js:18 1 - 2   2
// 07-Kruskal.js:18 1 - 3   4
// 07-Kruskal.js:18 1 - 4   2
// 07-Kruskal.js:18 3 - 5   2