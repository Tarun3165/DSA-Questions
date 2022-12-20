// link:- https://leetcode.com/problems/middle-of-the-linked-list/submissions/862745937/

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
var middleNode = function(head) {   //using length
    let temp=head;
let current=head;
    let count=0;
    while(temp!=null){
        temp=temp.next;
        count++;
    }
    let k;
   if(count%2==0){
     k=count/2+1;
   }
   else
   k=Math.ceil(count/2);

   for(let i=1;i<k;i++){
     current=current.next;
   }
   return current
};

var middleNode = function(head) {    //using two pointer
    let temp=head; 
    let slow=head;
    let fast=head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow
};