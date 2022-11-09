function Queue() {
  // 属性
  this.items = [];

  // 方法
  // 1、将元素加入队列中
  Queue.prototype.push = function (element) {
    this.items.push(element);
  };
  // 2、从队列中删除最前面的元素
  Queue.prototype.shift = function () {
    return this.items.shift();
  };
  // 3、查看最前面的元素
  Queue.prototype.peek = function () {
    return this.items[0];
  };
  // 4、查看队列是否为空
  Queue.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  // 5、查看队列元素的个数
  Queue.prototype.size = function () {
    return this.items.length;
  };
  // 6、tostring方法
  Queue.prototype.toString = function () {
    return this.items.join("");
  };
}

// // 使用队列
// let queue = new Queue();

// queue.push(123);
// queue.push(456);
// queue.push(789);

// queue.shift();
// console.log(queue);
// console.log(queue.peek());
// console.log(queue.isEmpty());
