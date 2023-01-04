function shellSort(array) {
  //1.获取数组的长度
  let length = array.length;

  //2.初始化增量
  let gap = Math.floor(length / 2);

  //3.第一层循环：while循环(使gap不断减小)
  while (gap >= 1) {
    //4.第二层循环：以gap为增量，进行分组，对分组进行插入排序
    //重点为：将index = gap作为选中的第一个数据
    for (let i = gap; i < length; i++) {
      let temp = array[i];
      let j = i;
      //5.第三层循环:寻找正确的插入位置
      while (array[j - gap] > temp && j > gap - 1) {
        array[j] = array[j - gap];
        j -= gap;
      }
      //6.将j位置的元素设置为temp
      array[j] = temp;
    }

    gap = Math.floor(gap / 2);
  }
  return array;
}

console.log(shellSort([12, 20, 1, 0, 45, 11, 7, 9]));
