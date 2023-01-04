function insertionSort(array) {
  //1.获取数组的长度
  let length = array.length;

  //2.外层循环:从第二个数据开始，向左边的已经局部有序数据进行插入
  for (let i = 1; i < length; i++) {
    //3.内层循环：获取i位置的元素，使用while循环(重点)与左边的局部有序数据依次进行比较
    let temp = array[i];
    let j = i;
    while (array[j - 1] > temp && j > 0) {
      array[j] = array[j - 1]; //大的数据右移
      j--;
    }
    //4.while循环结束后，index = j左边的数据变为局部有序且array[j]最大。此时将array[j]重置为排序前的数据array[i]，方便下一次for循环
    array[j] = temp;
  }
  return array;
}

console.log(insertionSort([12, 20, 1, 0, 45, 11, 7, 9]));
