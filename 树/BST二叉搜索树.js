function BinarySearchTree() {
  // 创建节点构造函数
  function Node(key) {
    this.key = key;
    // this.key
    // this.value
    this.left = null;
    this.right = null;
  }

  // 保存根节点属性
  this.root = null;

  // 1、插入数据
  BinarySearchTree.prototype.insert = function (key) {
    // 1、跟数据key创建
    let newNode = new Node(key);

    // 2、判断根节点是否有值
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  };

  BinarySearchTree.prototype.insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      //向左查找
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      //  向右查找
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  };

  // 树的遍历
  //1、先序遍历(先根再左再右)
  BinarySearchTree.prototype.preOrderTraversal = function (handler) {
    this.preOrderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      // 处理经过的节点
      handler(node.key);
      // 2、处理经过节点的左子节点
      this.preOrderTraversalNode(node.left, handler);
      // 3、处理经过节点的右子节点
      this.preOrderTraversalNode(node.right, handler);
    }
  };

  // 2、中序遍历(先左再根(父)再右)
  /*
  实现思路：与先序遍历原理相同，只不过是遍历的顺序不一样了。
    首先，遍历其左子树；
    然后，遍历根（父）节点；
    最后，遍历其右子树；
  */
  BinarySearchTree.prototype.inOrderTraversal = function (handler) {
    this.preOrderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.inOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      // 1、处理经过节点的左子节点(先找左节点，没有就打印本身，在找右节点)
      this.preOrderTraversalNode(node.left, handler);
      // 2、处理经过的节点
      handler(node.key);
      // 3、处理经过节点的右子节点
      this.preOrderTraversalNode(node.right, handler);
    }
  };

  // 3、后序遍历(先左再右在根)
  BinarySearchTree.prototype.postOrderTraversal = function (handler) {
    this.preOrderTraversalNode(this.root, handler);
  };
  BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
    if (node !== null) {
      // 1、查找左树子节点
      this.preOrderTraversalNode(node.left, handler);
      // 2、查找右树子节点
      this.preOrderTraversalNode(node.right, handler);
      // 3、处理经过的节点
      handler(node.key);
    }
  };

  // 获取最大值及最小值
  BinarySearchTree.prototype.min = function () {
    let node = this.root;
    // let Node = node;
    while (node !== null && node.left !== null) {
      // Node = node;
      node = node.left;
    }
    return node.key;
  };
  BinarySearchTree.prototype.max = function () {
    let node = this.root;
    // let Node = node;
    while (node !== null && node.right !== null) {
      // Node = node;
      node = node.right;
    }
    return node.key;
  };

  // 查找特定的key值是否存在
  BinarySearchTree.prototype.search = function (key) {
    let node = this.root;
    if (this.root === null) {
      return false;
    }
    while (node) {
      if (node.key < key) {
        node = node.right;
      } else if (node.key > key) {
        node = node.left;
      } else {
        return true;
      }
    }
    return false;
    // 也可以使用递归
    // return this.searchNode(this.root, key);
    // BinarySearchTree.prototype.searchNode = function (node, key) {
    //   if (!node) {
    //     return false;
    //   }

    //   if (node.key > key) {
    //     return this.searchNode(node.left, key);
    //   } else if (node.key < key) {
    //     return this.searchNode(node.right, key);
    //   } else {
    //     return true;
    //   }
    // };
  };

  // 删除节点(懒人方法，给每一个节点定义一个isDeleted属性，删除就赋值false，查找时跳过，但是在内存中的空间任然存在，浪费空间)
  BinarySearchTree.prototype.remove = function (key) {
    // 1、定义临时变量
    let current = this.root;
    let parent = null;
    let isLeftChild = true; //用以判断要删除的节点是在父节点左边还是右边

    // 2、开始查找节点
    if (!current) {
      return false; //根节点为空则返回false
    }
    while (current.key !== key) {
      parent = current; //保存父节点
      if (current.key < key) {
        isLeftChild = false;
        current = current.right;
      } else {
        isLeftChild = true;
        current = current.left;
      }
      if (!current) return false; // 没有找到
    }

    // 到这已经说明找到了
    // 3、根据对应的情况删除节点(三种情况讨论)
    // 3.1 删除的是叶子节点
    if (current.left === null && current.right === null) {
      if (current === this.root) {
        this.root = null;
      } else if (isLeftChild) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }

    // 3.2 删除的节点只有一个子节点
    else if (current.right === null) {
      // 判断是否是根节点
      if (current === this.root) {
        this.root = current.left;
      }
      // 判断当前删除节点是父节点的左节点还是右节点
      if (isLeftChild) {
        parent.left = current.left;
      } else {
        parent.right = current.left;
      }
    } else if (current.left === null) {
      if (current === this.root) {
        this.root = current.right;
      }
      if (isLeftChild) {
        parent.left = current.right;
      } else {
        parent.right = current.right;
      }
    }

    // 3.3 删除的节点有两个子节点及以上(左边找大，右边找最小)
    else {
      // 1、获取后继节点
      let successor = this.getSuccssor(current);

      // 2、判断是否是根节点
      if (current === this.root) {
        this.root = successor;
      } else if (isLeftChild) {
        parent.left = successor;
      } else {
        parent.right = successor;
      }
      // 3、将删除节点的左子树 = current.left(由于寻找的后继，所以左节点无任何变化，我们需要考虑的是右节点的变化)
      successor.left = current.left;
    }
  };

  // 寻找后继的方法(右边最小的)
  BinarySearchTree.prototype.getSuccssor = function (delNode) {
    // 1、定义变量，保存找到的后继
    let successor = delNode;
    let current = delNode.right;
    let successorParent = delNode; // 后继节点的父节点

    // 2、循环查找
    while (current !== null) {
      successorParent = successor;
      successor = current;
      current = current.left;
    }

    // 3、判断寻找的后继节点是否直接就是删除节点的right节点
    if (successor !== delNode.right) {
      successorParent.left = successor.right; //让后继节点的父节点指向后继节点的右节点，不管是不是null
      successor.right = delNode.right; //让后继节点的右节点指向删除节点的右节点
    }
    return successor;
  };
}

let p = new BinarySearchTree();
p.insert(11);
p.insert(7);
p.insert(5);
p.insert(3);
p.insert(6);
p.insert(9);
p.insert(8);
p.insert(10);
p.insert(15);
p.insert(13);
p.insert(12);
p.insert(14);
p.insert(20);
p.insert(18);
p.insert(28);

console.log(p.max());
console.log(p.min());
console.log(p.search(45));
