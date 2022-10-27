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
    //   } else if (node.key > key) {
    //     return this.searchNode(node.right, key);
    //   } else {
    //     return true;
    //   }
    // };
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
