/**
 * need to solve below prblems and add to appropriate folder
 */
// 1. Find a middle in Link lIst
// 2. All operations of Stack with logic and application
// 3. Given 2 arrays, find if one array is a subsequence of another. 
// 4. Write a function that takes a string and a substring as parameters and returns the position of the substring.
// 5. Given 3 arrays with a large amount of numbers in each. All 3 arrays are pre sorted. Right a function/method that will find the numbers that appear in all three arrays. 
// 6. Given a string s="aabcbabcc" and another string t="abc". Write a code to remove second string from first string
// 7. Give an array of integer a=[1,2,2,3,4,4,5,5,5]
//     Find the digits which have occurred two or more times in the array
//     In above e.g: 2,4,5 have occurred two or more times. Hence return 3.
// 8.  Given a Singly Linked List, detect and remove the loop.

// 9. Write a function to generate a Fibonacci series.


// Single LinkedList operations

function LinkedList() {
  this.head = null
}
LinkedList.prototype.push = function (val) {
  var node = { value: val, next: null }
  if (!this.head) { this.head = node; }
  else {
    let current = this.head;
    while (current.next) { current = current.next; }
    current.next = node;
  }
}


LinkedList.prototype.remove = function (val) {
  var current = this.head;
  //case-1 
  if (current.value == val) { this.head = current.next; }
  else {
    var previous = current;
    while (current.next) {
      //case-3 if(current.value == val)
      {
        previous.next = current.next;
        break;
      }
      previous = current;
      current = current.next;
    }
    //case -2 if(current.value == val)
    { previous.next == null; }
  }
}

//Detect loop in single list
function detectLoop(sll) {
  var slowPointer = sll.head,
    fastPointer = sll.head;
  while (slowPointer && fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next; fastPointer = fastPointer.next.next;
    if (slowPointer == fastPointer) { return true; }
  }
  return false;
}
//Remove element from single link list
LinkedList.prototype.remove = function (val) {
  var current = this.head;
  //when element is at start
  if (current.value == val) {
    this.head = current.next;
  }
  //when element is at middle position
  else {
    var previous = current;
    while (current.next) {
      if (current.value == val) {
        previous.next = current.next;

        break;
      }
      previous = current;
      current = current.next;
    }
    //When element is at end
    if (current.value == val) {
      previous.next = null;
    }
  }
}

//Find element at middle position
//need to complete
var sll = new LinkedList();

//Reverse link list
function reversesll(sll) {

  if (!sll.head || !sll.head.next) return sll;

  var nodes = [],
    current = sll.head;
  //storing all the nodes in an array
  while (current) {
    nodes.push(current);
    current = current.next;
  }
  console.log(nodes);
  var reversedLL = new linklist();

  reversedLL.head = nodes.pop();
  current = reversedLL.head;

  var node = nodes.pop();
  console.log(node);
  //make sure to make next of the newly inserted node to be null
  //other wise the last node of your SLL will retain its old next.
  while (node) {
    node.next = null;
    current.next = node;

    current = current.next;
    node = nodes.pop();
  }
  return reversedLL;
}
