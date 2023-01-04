function selectionSort(array) {
  //1.获取数组的长度
  let length = array.length;

  //2.外层循环：从0开始获取元素
  for (let j = 0; j < length - 1; j++) {
    //内层循环：从i+1位置开始，和后面的元素进行比较
    for (let i = j + 1; i < length; i++) {
      if (array[j] > array[i]) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

console.log(selectionSort([12, 20, 1, 0, 45, 11, 7, 9]));
