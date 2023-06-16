// 对于给定的图 GG，我们希望深度优先搜索算法遍历图 GG 的所有节点，构建“森林”（有根树的一个集合）
import Queue from '../3.队列/1.queue队列'
import Dictionary from '../6.字典和散列表/1.字典'
import Stack from '../2.栈/2.基于对象的栈'
import Graph from './1.邻接表图(字典表示)'

const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
};
const initializeColor = vertices => {
    const color = {};
    for (let i = 0; i < vertices.length; i++) {
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
};


//DFS  构建树
export const DFS = graph => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const d = {};  //顶点 u 的发现时间 d[u]；
    const f = {};  //当顶点 u 被标注为黑色时，u 的完成探索时间 f[u]；
    const p = {};  //顶点 u 的前溯点 p[u]。
    const time = { count : 0}; // time 追踪发现时间和完成探索时间
    for (let i = 0; i < vertices.length; i++) { //初始化
        f[vertices[i]] = 0;
        d[vertices[i]] = 0;
        p[vertices[i]] = null;
    }
    for (let i = 0; i < vertices.length; i++) {
        if (color[vertices[i]] === Colors.WHITE) {
            DFSVisit(vertices[i], color, d, f, p, time, adjList);
        }
    }
    return { // {3}
        discovery: d,
        finished: f,
        predecessors: p
    };
};

const DFSVisit = (u, color, d, f, p, time, adjList) => {
    color[u] = Colors.GREY;
    d[u] = ++time.count; //当一个顶点第一次被发现时，我们追踪其发现时间
    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++) {
        const w = neighbors[i];
        if (color[w] === Colors.WHITE) {
            p[w] = u; // 更新predecessors 追踪它的前溯点
            DFSVisit(w, color, d, f, p, time, adjList);
        } 
    }
    color[u] = Colors.BLACK;
    f[u] = ++time.count; // 追踪它的完成时间
};
console.log('################################')

const graph = new Graph(true); // 有向图

const myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');

const result = DFS(graph); //构建树

// * 时间（`time`）变量值的范围只可能在图顶点数量的一倍到两倍（`2|V|`）之间；
// * 对于所有的顶点 `u`，`d[u]<f[u]`（意味着，发现时间的值比完成时间的值小，完成时间意思是所有顶点都已经被探索过了）。
// 1 <= d [u] < f [u] <= 2|V|

//安装完成时间排序
console.log(result)
const fTimes = result.finished;
let s = '';
for (let count = 0; count < myVertices.length; count++) {
    let max = 0;
    let maxName = null;
    for (let i = 0; i < myVertices.length; i++) {
        if (fTimes[myVertices[i]] > max) {
            max = fTimes[myVertices[i]];
            maxName = myVertices[i];
        }
    }
    s += ' - ' + maxName;
    delete fTimes[maxName];
}
console.log(s);


