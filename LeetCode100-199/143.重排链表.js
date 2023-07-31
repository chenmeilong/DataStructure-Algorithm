// 还有种方法，空间为1的解法，快慢指针找到中间点+翻转后半段链表+合并链表

// 线性表来做的
var reorderList = function(head) {
    let nodeArr = []  
    let next = head
    while(next){
        nodeArr.push(next)
        next = next.next
    }
    let newHead = nodeArr.shift()
    let isPop = true //获取方式是true表示pop，false表示shift
    while(nodeArr.length>0){
        if(isPop){
            newHead.next = nodeArr.pop()
            
        }else{
            newHead.next = nodeArr.shift()
        }
        newHead = newHead.next
        newHead.next = null
        isPop=!isPop
    }
    return head
};