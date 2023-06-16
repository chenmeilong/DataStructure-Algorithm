
function hotPotato(elementsList, num) {
    const queue = new (require('./1.queue队列').Queue)(); //实例化 队列对象
    const eliminatedList = [];
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]); // {2} 初始化队列
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {  //击鼓
            queue.enqueue(queue.dequeue()); // {3}传花
        }
        eliminatedList.push(queue.dequeue()); // {4}移除被选中的人
    }
    return {
        eliminated: eliminatedList,
        winner: queue.dequeue() // {5}  
    };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);

result.eliminated.forEach(name => {
    console.log(`${name}在击鼓传花游戏中被淘汰。`);
});

console.log(`胜利者： ${result.winner}`);

