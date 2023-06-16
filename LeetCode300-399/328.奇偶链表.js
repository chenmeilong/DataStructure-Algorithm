
// 双指针
var oddEvenList = function(head) {
    if(head===null || head.next===null) return head
    let jihead = head
    let ouhead = head.next
    let ji = jihead
    let ou = ouhead
    head = head.next.next
    let i = 1
    while(head){
        if(i%2){
            // 奇数
            ji.next = head
            ji = head
        }else{
            // 偶数
            ou.next = head
            ou = head
        }
        head = head.next
        i++
    }
    ji.next = ouhead
    ou.next = null
    return jihead
};