

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {  //method 1  using length
    let temp=head;
    let count=1;
    while(temp.next!=null){
       count++;
       temp=temp.next;
    }
    console.log(count)
    temp=head;
    let k=count-n;
   
    if(k==0){
        return head.next
    }
    for(let i=1;i<k;i++){
        temp=temp.next;
    }

    temp.next=temp.next.next;
    return head;
};


var removeNthFromEnd = function(head, n) {  //method 2  using two pointer
    let temp=head;
    let prev=head;
    let pprev=head;
    let p=false;


   for(let i=1;i<n;i++){
       
       temp=temp.next;
   }
   while( temp.next!=null ){
       p=true
       temp=temp.next;
       pprev=prev;
       prev=prev.next;
   }
    pprev.next=prev.next;
    if(p==false){
        return head.next
    }
    return head;
};