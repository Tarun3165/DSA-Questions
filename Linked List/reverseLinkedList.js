// link:https://leetcode.com/problems/reverse-linked-list/submissions/862734601/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let cur=head;
    let prev=  null;
    let future=head;
    if(head==null)
    return null;
    while(cur!=null){
        future=cur.next;
        cur.next=prev;
        prev=cur;
        cur=future;
    }
  return prev;
  
  };

