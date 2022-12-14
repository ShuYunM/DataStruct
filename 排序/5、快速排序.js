//交换两个位置的数据
let swap = function (arr, m, n) {
  let temp = arr[m];
  arr[m] = arr[n];
  arr[n] = temp;
};

//快速排序
//1.选择枢纽
let median = function (arr) {
  //1.取出中间的位置
  let center = Math.floor(arr.length / 2);
  let right = arr.length - 1;
  let left = 0;

  //2.判断大小并进行交换
  if (arr[left] > arr[center]) {
    swap(arr, left, center);
  }
  if (arr[center] > arr[right]) {
    swap(arr, center, right);
  }
  if (arr[left] > arr[right]) {
    swap(arr, left, right);
  }
  //3.返回枢纽
  return center;
};

//2.快速排序
let QuickSort = function (arr) {
  if (arr.length == 0) {
    return [];
  }
  let center = median(arr);
  let c = arr.splice(center, 1);
  let l = [];
  let r = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < c) {
      l.push(arr[i]);
    } else {
      r.push(arr[i]);
    }
  }
  return QuickSort(l).concat(c, QuickSort(r));
};

let arr = [0, 13, 81, 43, 31, 27, 56, 92];
console.log(QuickSort(arr));
