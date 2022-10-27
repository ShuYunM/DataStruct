// 封装双向链表
function DoublyLinkedList() {
  function Node(params) {
    // 元素
    this.data = params;
    // 前一个节点
    this.prev = null;
    // 后一个节点
    this.next = null;
  }
  // 首
  this.head = null;
  // 尾
  this.tail = null;
  // 长度
  this.length = 0;

  // append 向链表尾添加
  DoublyLinkedList.prototype.append = function (data) {
    // 创建节点
    let newNode = new Node(data);

    // 2、判断是否是第一个节点
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  };

  // 将链表转换成字符串形式
  DoublyLinkedList.prototype.toString = function () {};
  //
  DoublyLinkedList.prototype.forwardString = function () {
    let current = this.tail;
    let resultString = "";

    while (current) {
      resultString += current.data + "";
      current = current.prev;
    }
    return resultString;
  };
  //
  DoublyLinkedList.prototype.backwardString = function () {
    let current = this.head;
    let resultString = "";

    while (current) {
      resultString += current.data + "";
      current = current.next;
    }
    return resultString;
  };

  // insert插入
  DoublyLinkedList.prototype.insert = function (position, element) {
    if (position < 0 || position > this.length) return false;
    let newNode = new Node(element);
    let current = this.head;

    // 链表为空的情况下
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 插入位置为头部
      if (position === 0) {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
      } else if (position === this.length) {
        // 插入尾部
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        // 插入其他任意位置时
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }
        // 将当前创建的节点的next指向插入处的下一个节点(挤到后面的节点)
        newNode.next = current;
        // 将被挤到后面的节点的原上一个节点的next指向创建的节点
        current.prev.next = newNode;
        // 将当前创建节点的prev指向原节点的prev
        newNode.prev = current.prev;
        // 最后将原节点的prev指向创建节点
        current.prev = newNode;
      }
    }
    this.length += 1;
    return true;
  };

  // 通过值获取元素
  DoublyLinkedList.prototype.get = function (position) {
    if (position < 0 || position >= this.length) return false;
    let current = this.head;
    let index = this.length - 1;

    // 从后往前遍历(二分法)
    if (this.length / 2 < position) {
      current = this.tail;
      while (index-- > position) {
        current = current.prev;
      }
    } else {
      // 从前往后遍历
      index = 0;
      current = this.head;
      while (index++ < position) {
        current = current.next;
      }
    }
    return current.data;
  };

  // 按元素查找位置
  DoublyLinkedList.prototype.indexOf = function (element) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === element) {
        return index;
      }
      current = current.next;
      index += 1;
    }
    return -1;
  };

  // 根据位置修改元素
  DoublyLinkedList.prototype.update = function (position, element) {
    // 可以调用get方法(修改get方法的返回为对象)，就可以直接调用并修改元素
    if (position < 0 || position >= this.length) return false;
    let current = this.head;
    let index = this.length - 1;
    if (this.length / 2 < position) {
      current = this.tail;
      while (index-- > position) {
        current = current.prev;
      }
      current.data = element;
    } else {
      index = 0;
      while (index++ < position) {
        current = current.next;
      }
      current.data = element;
    }
    return true;
  };

  // 根据位置删除节点
  DoublyLinkedList.prototype.removeAt = function (position) {
    // 越界判断
    if (position < 0 || position >= this.length) return false;

    let current = this.head;
    // 判断删除的是头节点和尾结点的情况
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    } else {
      // 删除第一个
      if (position === 0) {
        this.head.next.prev = null;
        this.head = this.head.next;
      } else if (position === this.length - 1) {
        // 删除最后一个
        current = this.tail;
        this.tail.prev.next = null;
        this.tail = this.tail.prev;
      } else {
        let index = 0;
        while (index++ < position) {
          current = current.next;
        }
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
    }
    this.length -= 1;
    // 返回被删除的元素
    return current.data;
  };

  // 根据元素删除节点,通过indexOf查找到元素的位置，在调用removeAt()删除元素即可

  DoublyLinkedList.prototype.size = function () {
    return this.length;
  };
}

let list = new DoublyLinkedList();
list.append("111");
list.append("222");
list.append("333");
list.append("444");
list.append("555");
list.append("666");
list.append("777");
list.append("888");
list.append("999");
// console.log(list.get(7));
// console.log(list.get(0));
// list.update(4, "aaa");
// console.log(list.get(4));
console.log("删除：" + list.removeAt(1));
console.log(list.get(1));
