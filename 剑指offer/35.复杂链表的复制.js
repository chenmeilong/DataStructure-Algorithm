/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
//三种解法 第一种正常 用个字典map记录每个节点，再用两层循环
var copyRandomList = function(head) {
    if (head == null){
        return null
    }
    const map = new Map()
    var cur = head
    while(cur!=null){
        map.set(cur,new Node(cur.val))
        cur = cur.next
    }
    //由于前面的对象已经建好  所以可以重新给next和random的指向位置
    cur = head
    while(cur!=null){
        map.get(cur).next = map.get(cur.next)  || null
        map.get(cur).random = map.get(cur.random) || null
        cur = cur.next
    }
    return map.get(head)
};


//法二  回溯＋map
var copyRandomList = function(head, map = new Map()) {
    if (!head) return null
    if (!map.has(head)) {
        map.set(head, new Node(head.val))  //自己改进的方法
        map.get(head).next = copyRandomList(head.next,map)
        map.get(head).random = copyRandomList(head.random,map)
    }
    return map.get(head)
};

//法三  迭代+节点拆分  交叉复制出一份新的链表   一共三层迭代
var copyRandomList = function(head) {
    if(!head) return null
    // 创建节点
    for (let cur = head; cur !=null; cur = cur.next.next){
        let newNode = new Node(cur.val,cur.next,null)
        cur.next = newNode
    }
    //random赋值
    for (let cur = head; cur !=null; cur = cur.next.next){
        let newNode = cur.next
        newNode.random = (cur.random != null) ? cur.random.next:null
    }
    //恢复
    const newhead = head.next
    for (let cur = head; cur !=null; cur = cur.next){
        let newNode = cur.next
        cur.next = newNode.next
        newNode.next =(cur.next != null) ? cur.next.next:null
    }
    return newhead

};

