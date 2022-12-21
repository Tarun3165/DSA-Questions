// link:- https://leetcode.com/problems/add-two-numbers/submissions/863119342/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let head = new ListNode(-1, null);
  let temp = head;
  while (l1 != null || l2 != null || carry == 1) {
    if (l1 != null && l2 != null) {
      carry = l1.val + l2.val + carry;
      l1 = l1.next;
      l2 = l2.next;
    } else if (l1 != null) {
      carry = l1.val + carry;
      l1 = l1.next;
    } else if (l2 != null) {
      carry = l2.val + carry;
      l2 = l2.next;
    }
    let rem = carry % 10;
    let node = new ListNode(rem, null);
    temp.next = node;
    carry = Math.floor(carry / 10);
    temp = temp.next;
  }

  return head.next;
};
