function Bubbling(array) {
  //1.获取数组的长度
  let length = array.length;

  //外层循环控制冒泡趟数
  for (let j = length - 1; j >= 0; j--) {
    //内层循环控制每趟比较的次数
    for (let i = 0; i < j; i++) {
      if (array[i] > array[i + 1]) {
        //交换两个数据
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}
console.log(Bubbling([12, 20, 1, 0, 45, 11, 7, 9]));
