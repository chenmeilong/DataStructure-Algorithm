// 这种在原始链表上增加删除的方式，显得比较繁琐 
// 题解是在创建了两个链表,分别维护他们,最后在合在一起(以后一定用这个方法)

var partition = function(head, x) {
    //加入虚拟头节点 防止前无法插入节点 
    let preHead = new ListNode(x-1)
    preHead.next = head
    // 指向 小于 x的节点
    let left = preHead
    // 指向 下个节点将要小于x的节点
    let right = left

    while(right.next){
        while(left.next && left.next.val<x){
            left = left.next
        }
        right = left
        while(right.next && right.next.val>=x){
            right = right.next
        }
        if(right.next===null) break

        // 删除节点，再插入节点
        let insetNode = right.next
        right.next = right.next.next
        let next = left.next
        left.next = insetNode
        insetNode.next = next
    }
    return preHead.next
};


function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let head = new ListNode(1)
head.next = new ListNode(4)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(2)
head.next.next.next.next = new ListNode(5)
head.next.next.next.next.next = new ListNode(2)

let newhead = partition(head,3)
console.log(newhead);
console.log(newhead.next.next.next);