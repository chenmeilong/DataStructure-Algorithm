function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
//法一  递归
// var reversePrint = function(head) {
//     if(head==null) return []
//     return reversePrint(head.next).concat([head.val])
// };

//法二    循环  效率会高一点
var reversePrint = function(head) {
    if(!head) return []
    let arr = []
    while(head!=null){
        arr.push(head.val)
        head = head.next
    }
    return arr.reverse()
};



head = new ListNode(1)
head.next = new ListNode(3)
head.next.next = new ListNode(2)

console.log(reversePrint(head))