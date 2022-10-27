function HasTable() {
  // 属性
  this.storage = [];
  this.count = 0; //记录当前数组存放元素
  this.limit = 7; //记录数组长度，动态变化(localFactor)2倍，容量扩展后，所有元素需要重新插入，否则会找不到
  // localFactor > 0.75 的时候进行扩容，localFactor < 0.25 进行收缩 ,最好是个质素

  // 使用链地址法

  // 哈希函数
  HashTable.prototype.hasFunc = function (str, size) {
    // 1、定义hasCode变量
    let hashCode = 0;

    // 2、霍纳算法，来计算hasCode的值
    for (let index = 0; index < str.length; index++) {
      hashCode = 37 * hashCode + str.charCodeAt(index);
    }

    // 3、取余操作
    let index = hashCode % size;
    return index;
  };

  // 插入&修改操作
  HasTable.prototype.put = function (key, value) {
    // 1、根据key获取对应的index
    let index = this.hasFunc(key, this.limit);

    // 2、根据index取出对应的bucket(桶)
    let bucket = this.storage[index];

    // 3、判断该bucket是否为null
    if (bucket == null) {
      bucket = [];
      this.storage[index] = bucket;
    }

    // 4、判断是否是修改数据
    for (let index = 0; index < bucket.length; index++) {
      let tuple = bucket[index];
      if (tuple[0] === key) {
        tuple[1] = value;
        return true;
      }
    }

    // 添加操作
    bucket.push([key, value]);
    this.count += 1;

    // 判断是否需要扩容操作
    if (this.count > this.limit * 0.75) {
      let newSize = this.limit * 2;
      // 判断质素，及得到质素
      let newPrime = this.getPrime(newSize);
      this.resize(newPrime);
    }
  };

  // 获取操作
  HasTable.prototype.get = function (key) {
    let index = this.hasFunc(key, this.limit);
    let bucket = this.storage[index];

    // 空状态
    if (!bucket) {
      return null;
    }

    for (let index = 0; index < bucket.length; index++) {
      let tuple = bucket[index];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
  };

  // 删除操作
  HasTable.prototype.remove = function (key) {
    let index = this.hasFunc(key, this.limit);
    let bucket = this.storage[index];
    if (!bucket) return null;

    for (let index = 0; index < bucket.length; index++) {
      let tuple = bucket[index];
      if (tuple[0] === key) {
        bucket.splice(index, 1);
        this.count--;
        // 缩小容量
        if (this.limit > 7 && this.count < this.limit * 0.25) {
          let newSize = Math.floor(this.limit / 2);
          let newPrime = this.getPrime(newSize);
          // this.resize(Math.floor(this.limit / 2));
          this.resize(newPrime);
        }
        return tuple[1];
      }
    }

    // 最后都没有找到，返回null
    return null;
  };

  // 判断哈希表是否为空
  HasTable.prototype.isEmpty = function () {
    return this.count == 0;
  };

  // 判断元素个数
  HasTable.prototype.size = function () {
    return this.count;
  };

  // 哈希表扩容
  HasTable.prototype.resize = function (newLimit) {
    let oldStorage = this.storage;

    // 2、重置所有属性
    this.storage = [];
    this.count = 0;
    this.limit = newLimit;

    // 3、变量oldStorage中所有的桶
    for (let index = 0; index < oldStorage.length; index++) {
      let bucket = oldStorage[index];
      if (!bucket) {
        continue;
      }
      for (let index = 0; index < bucket.length; index++) {
        let tuple = bucket[index];
        this.put(tuple[0], tuple[1]);
      }
    }
  };

  // 判断是否是质素
  HashTable.prototype.isPrime = function (num) {
    let temp = parseInt(Math.sqrt(num));
    for (let index = 0; index <= temp; index++) {
      if (num % 2 === 0) {
        return false;
      }
    }
    return true;
  };

  // 获取质素的方法
  HasTable.prototype.getPrime = function (num) {
    while (!this.isPrime(num)) {
      num++;
    }
    return num;
  };
}
