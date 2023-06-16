

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//迭代法
// var reverseList = function(head) {
//     if(!head) return head
//     let newHead
//     let next = null
//     while(head){
//         newHead = new ListNode(head.val)
//         newHead.next = next
//         next = newHead
//         head = head.next
//     }
//     return newHead
// };


//递归法
var reverseList = function(head) {
    let newHead = null
    digui(head)
    function digui(head){
        if(!head){
            return head
        }
        else if(!head.next){     
            newHead =   new ListNode(head.val)
            return newHead
        }else{
            let parent = digui(head.next)
            let node = new ListNode(head.val)
            parent.next = node
            return node
        }
    }
    return newHead
};

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
// console.log(head);

console.log(reverseList(head));
