// 这种方法比较繁琐，遍历了两遍链表，还有种边遍历边翻转的方法，只需要遍历一次链表，这种方法才是最佳解法

var reverseBetween = function(head, left, right) {
    if(left===right) return head

    let sleft = null
    let rleft = null
    let sright = null
    let rright = null
    let node = head
    let len = 0
    while(node){
        len++
        if(left-1 === len) sleft = node
        if(left === len) rleft = node
        if(right === len) rright = node
        if(right+1 === len) sright = node
        node = node.next
    }

    rright.next = null
    let pre = null
    node = rleft
    while(node){
        let next = node.next
        node.next = pre
        pre = node
        node = next
    }
    if(sleft){
        sleft.next = rright
    }
    if(sright){
        rleft.next = sright
    }
    return sleft?head:rright
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
head.next.next.next.next = new ListNode(5)
console.log(reverseBetween(head,2,4));