//
// singly linked linked list
//

module.exports = LinkedList;

function LinkedList() {
  this.head = null;
  this.tail = null;
  this.length = 0;
}

LinkedList.prototype = {
  // add an element to the front of the list
  unshift: function (element) {
    this.head = new Node(element, this.head);
    if (this.tail === null) {
      this.tail = this.head;
    }
    this.length += 1;
    return this.length;
  },
  // remove an element from the front of the list
  shift: function () {
    var removed = this.head;
    this.head = removed.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return removed.value;
  },
  // add an element to the end of the list
  push: function (element) {
    var e = new Node(element);
    if (this.tail) {
      this.tail.next = e;
    }
    this.tail = e;
    if (this.head === null) {
      this.head = this.tail;
    }
    this.length += 1;
    return this.length;
  },
  // remove an element from the end of the list
  pop: function () {
    
  },
  // get element at index
  get: function (index) {

  },
  // remove element at index
  remove: function (index) {

  },
  toString: function () {
    var node = this.head;
    var string = '[';
    while (node !== null) {
      if (node !== this.tail) {
        string += node.value + ', ';
      } else {
        string += node.value;
      }
      node = node.next;
    }
    string += ']';
    return string;
  }
};

function Node(value, next) {
  this.value = value;
  this.next = next || null;
}

if (require.main === module) {
  var microtime = require('microtime');
  var list = new LinkedList();

  // var m = 5,
  //     n = 5;

  // while (m--) {
  //   list.unshift(m);
  // }
  // console.log('%s %d', list.toString(), list.length);
  // while (n--) {
  //   list.shift();
  // }
  // console.log('%s %d', list.toString(), list.length);
  var linkedList = new LinkedList();
  var arrayList = new Array();
  unshiftTest(linkedList, arrayList, 100000);
  shiftTest(linkedList, arrayList, 100000);
  pushTest(linkedList, arrayList, 100000);
}

function unshiftTest(linkedList, arrayList, n) {
  console.log('unshift test: %d elements', n);
  (function () {
    var i = n;
    var t1 = microtime.now();
    while (i--) {
      linkedList.unshift(i);
    }
    console.log(microtime.now() - t1);
  })();

  (function () {
    var i = n;
    var t1 = microtime.now();
    while (i--) {
      arrayList.unshift(i);
    }
    console.log(microtime.now() - t1);
  })();
}

function shiftTest(linkedList, arrayList, n) {
  console.log('shift test: %d elements', n);
  (function () {
    var i = n;
    var t1 = microtime.now();
    while (i--) {
      linkedList.shift();
    }
    console.log(microtime.now() - t1);
  })();

  (function () {
    var i = n;
    var t1 = microtime.now();
    while (i--) {
      arrayList.shift();
    }
    console.log(microtime.now() - t1);
  })();
}

function pushTest(linkedList, arrayList, n) {
  console.log('push test: %d elements', n);
  (function () {
    var i = n;
    var t1 = microtime.now();
    while (i--) {
      linkedList.push(i);
    }
    console.log(microtime.now() - t1);
  })();

  (function () {
    var i = n;
    var t1 = microtime.now();
    while (i--) {
      arrayList.push(i);
    }
    console.log(microtime.now() - t1);
  })();
}