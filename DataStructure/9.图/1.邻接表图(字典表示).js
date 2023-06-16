import Dictionary from '../6.字典和散列表/1.字典'

export default class Graph {
    constructor(isDirected = false) {
        this.isDirected = isDirected; //图是否有方向，默认图无方向
        this.vertices = []; //数组存图中的所有顶点的名字
        this.adjList = new Dictionary(); //字典存储领接表，key是顶点名字，value是邻接顶点列表的值
    }
    //向图中添加新顶点
    addVertex(v) {
        if (!this.vertices.includes(v)) { // {5}
            this.vertices.push(v); // {6}
            this.adjList.set(v, []); //先置为空
        }
    }
    // 两个顶点作为参数
    addEdge(v, w) {
        if (!this.adjList.get(v)) {
             this.addVertex(v); // 顶点不在图中，添加到图
        }
        if (!this.adjList.get(w)) {
            this.addVertex(w); // 顶点不在图中，添加到图
        }
        this.adjList.get(v).push(w); //连接两个顶点 边
        if (!this.isDirected) {
            this.adjList.get(w).push(v); // 如果没有方向，需要整成双向的
        }
    }
    //取顶点列表
    getVertices() {
        return this.vertices; 
    }
    //取邻间列表
    getAdjList() {
        return this.adjList;
    }
    //查看图
    toString() {
        let s = '';
        for (let i = 0; i < this.vertices.length; i++) { // {15}
            s += `${this.vertices[i]} -> `;
            const neighbors = this.adjList.get(this.vertices[i]); // {16}
            for (let j = 0; j < neighbors.length; j++) { // {17}
                s += `${neighbors[j]} `;
            }
            s += '\n'; // {18}
        }
        return s;
    }
}

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