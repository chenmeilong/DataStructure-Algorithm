var mergeTwoLists = function(list1, list2) {
    let head = new ListNode()
    let node = head
    while(list1 && list2){
        if(list1.val>list2.val){
            node.next = list2  //直接赋值效率高
            list2 = list2.next
        }else{
            node.next =list1
            list1 = list1.next
        }
        node = node.next
    }
    if(list1==null) node.next = list2
    else node.next = list1
    return head.next
};