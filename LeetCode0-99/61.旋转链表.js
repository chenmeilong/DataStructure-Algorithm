
var rotateRight = function(head, k) {
    if(head===null || k===0) return head
    let node = head
    let len = 0
    while(node){
        len++
        node = node.next
    }
    k = k%len
    if(k===0) return head
    let newHead = head
    let i = len-k
    while(i--){
        let next = newHead.next
        if(i===0) newHead.next = null
        newHead = next
    }
    node = newHead
    while(node.next){
        node = node.next
    }
    node.next = head
    return newHead 
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
console.log(rotateRight(head,2));