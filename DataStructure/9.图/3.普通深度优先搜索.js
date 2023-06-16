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

//深度优先算法  接收一个 Graph 类实例和回调函数作为参数
const depthFirstSearch = (graph, callback) => { // {1}
    const vertices = graph.getVertices();//顶点表
    const adjList = graph.getAdjList();  //邻接表
    const color = initializeColor(vertices); //初始化为白色
    for (let i = 0; i < vertices.length; i++) { // 对每个顶点进行遍历
        if (color[vertices[i]] === Colors.WHITE) { // 白色为探索
            //传递的参数为要访问的顶点 、颜色数组以及回调函数
            depthFirstSearchVisit(vertices[i], color, adjList, callback); 
        }
    }
};
const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GREY; //表示该顶点被访问过，但并未被探索过。
    if (callback) { // {6}
        callback(u);
    }
    const neighbors = adjList.get(u); // 获取 相邻顶点
    for (let i = 0; i < neighbors.length; i++) { // {8}
        const w = neighbors[i]; // {9}
        if (color[w] === Colors.WHITE) { // {10}
            depthFirstSearchVisit(w, color, adjList, callback); // {11}
        }
    }
    color[u] = Colors.BLACK; // {12}
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
console.log('###############')
const printVertex = (value) => console.log('Visited vertex: ' + value); //回调函数

depthFirstSearch(graph, printVertex);