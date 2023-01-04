// 封装栈类
function Stack() {
  // 栈的属性
  this.items = [];

  // 栈的相关操作
  // 1、将元素放入栈
  Stack.prototype.push = function (element) {
    this.items.push(element);
  };
  // 2、从栈中取出元素
  Stack.prototype.pop = function () {
    return this.items.pop();
  };
  // 3、查看栈顶元素
  Stack.prototype.peek = function () {
    return this.items[this.items.length - 1];
  };

  // 4、判断栈是否为空
  Stack.prototype.isEmpty = function () {
    return this.items.length === 0;
  };
  // 5、获取栈中元素的个数
  Stack.prototype.size = function () {
    return this.items.length;
  };
  // 6、toString方法，返回字符串形式
  Stack.prototype.toString = function () {
    return this.items.join("");
  };
}
// 栈的使用
// let s = new Stack();
// s.push(100);
// s.push(123);
// s.push(1);
// s.push(2);
// s.push(3);
// s.push(4);
// console.log(s);
// s.pop();
// console.log(s);
// console.log(s.peek());
// console.log(s.isEmpty());
// console.log(s.size());
// console.log(s.toString());

// 十进制转二进制

// function dec2bin(decNumber) {
//   // 1、定义栈对象
//   let stack = new Stack();
//   // 2、循环操作
//   while (decNumber > 0) {
//     // 2.1、获取余数放入栈中
//     stack.push(decNumber % 2);

//     // 2.2、获取整除的结果作为下一次运算的数字
//     decNumber = Math.floor(decNumber / 2);
//   }

//   // 3、从栈中取出0和1
//   let binString = "";
//   while (!stack.isEmpty()) {
//     binString = binString + stack.pop();
//   }
//   console.log(binString);
// }
// dec2bin(100);
