// 递归方式
// let frontPointer; //记录前指针
// const recursivelyCheck = (currentNode) => {
//     if (currentNode !== null) {
//         if (!recursivelyCheck(currentNode.next)) {
//             return false;
//         }
//         if (currentNode.val !== frontPointer.val) {
//             return false;
//         }
//         frontPointer = frontPointer.next;
//     }
//     return true;
// }
// var isPalindrome = function(head) {
//     frontPointer = head;
//     return recursivelyCheck(head);  //递归
// };

//  时间复杂度o（n） 空间复杂度为1 的解法  快慢指针+反转链表
//找到前半部分链表的尾节点。
// 反转后半部分链表。
// 判断是否回文。
// 恢复链表。
// 返回结果。
var isPalindrome = function(head) {
    if(head===null || head.next===null) return true
    //快慢指针找到中间点
    let fast = head
    let slow = head
    while(fast){
        if(fast.next!==null && fast.next.next!==null){
            fast = fast.next.next
            slow = slow.next
        }else break
    }
    let reverseHead = reverseList(slow.next)  //反转后面部分链表
    // 判断是否为回文
    let node = reverseHead
    let result = true
    while(node){
        if(node.val!==head.val) {
            result = false
            break
        }
        head = head.next
        node = node.next
    }
    //恢复链表
    slow.next = reverseList(reverseHead)  //反转后面部分链表
    return result

    function reverseList(head){
        let node = head
        let pre = null
        while(node){
            let next = node.next
            node.next = pre
            pre = node
            node = next
        }
        return pre
    }
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let head =  new ListNode(4)
head.next =  new ListNode(2)
head.next.next =  new ListNode(2)
head.next.next.next =  new ListNode(4)

console.log(isPalindrome(head));