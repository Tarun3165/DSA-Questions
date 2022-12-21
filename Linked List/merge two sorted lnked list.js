// link:- https://leetcode.com/problems/merge-two-sorted-lists/submissions/863035915/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let node=new ListNode(-1,null);

    let temp=node;
    while(list1!=null && list2!=null){
        if(list1.val<=list2.val){
            node.next=list1;
            list1=list1.next;
        }
        else{
            node.next=list2;
            list2=list2.next;
        }
        node=node.next;
    }
    if(list1!=null){
    node.next=list1
    }
    if(list2!=null){
        node.next=list2
    }
    return temp.next
};