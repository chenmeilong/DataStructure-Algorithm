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


//广度优先搜索算法
export const breadthFirstSearch = (graph, startVertex, callback) => {
    const vertices = graph.getVertices(); //顶点表
    const adjList = graph.getAdjList();   //邻间表
    const color = initializeColor(vertices); // 初始化为白色  访问颜色对象
    const queue = new Queue(); // 创建队列
    queue.enqueue(startVertex); // 顶点进入队列
    while (!queue.isEmpty()) { //如果队列不是空的
        const u = queue.dequeue(); // 从队列中取出数据
        const neighbors = adjList.get(u); // 从邻间表  字典中拿到该顶点连接的其他顶点
        color[u] = Colors.GREY; // 该顶点被访问过，但并未被探索过。
        for (let i = 0; i < neighbors.length; i++) { // {8}
            const w = neighbors[i]; // {9}
            if (color[w] === Colors.WHITE) { // 出现未访问的顶点
                color[w] = Colors.GREY; // 该顶点被访问过，但并未被探索过。
                queue.enqueue(w); // 顶点进入队列  加入下个循环需要遍历的顶点
            }
        }
        color[u] = Colors.BLACK; //该顶点被访问过且被完全探索过。
        if (callback) { // {14}
            callback(u);
        }
    }
};


//使用BFS寻找最短路径
const BFS = (graph, startVertex) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializeColor(vertices);
    const queue = new Queue();
    const distances = {}; // 表示距离
    const predecessors = {}; // 表示前溯点
    queue.enqueue(startVertex);

    for (let i = 0; i < vertices.length; i++) { // {3}
        distances[vertices[i]] = 0; // {4}
        predecessors[vertices[i]] = null; // {5}
    }
    while (!queue.isEmpty()) {
        const u = queue.dequeue();
        const neighbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (let i = 0; i < neighbors.length; i++) {
            const w = neighbors[i];
            if (color[w] === Colors.WHITE) {
                color[w] = Colors.GREY;
                distances[w] = distances[u] + 1; //计算距离
                predecessors[w] = u; // 更新前溯点
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }
    return { // {8}
        distances,
        predecessors
    };
};






const graph = new Graph();
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']; // {12}
for (let i = 0; i < myVertices.length; i++) { // {13}
    graph.addVertex(myVertices[i]);
}

graph.addEdge('A', 'B'); // {14}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');
console.log(graph.toString());


const printVertex = (value) => console.log('Visited vertex: ' + value); //回调函数 广度优先遍历输出
breadthFirstSearch(graph, myVertices[0], printVertex);  //myVertices[0]为起始顶点


const shortestPathA = BFS(graph, myVertices[0]);
console.log(shortestPathA);

//输出路径
const fromVertex = myVertices[0]; // 源顶点
for (let i = 1; i < myVertices.length; i++) { // 计算顶点A到其他顶点的路径
    const toVertex = myVertices[i]; 
    const path = new Stack(); // 创建栈
    // predecessors表示前溯点
    for (let v = toVertex;v !== fromVertex;v = shortestPathA.predecessors[v]) { 
        path.push(v); // {14}
    }
    path.push(fromVertex); // 栈写入源顶点
    let s = path.pop(); // 栈取出源顶点
    while (!path.isEmpty()) { // {17}
        s += ' - ' + path.pop(); // {18}
    }
    console.log(s); // {19}
}

