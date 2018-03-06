class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    //if the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      //If the tree already exist, then start at the root,
      //and compare it to the key you want to insert
      // If the new key is less than the node's key
      //then the new node needs to live in the left-hand branch.
      //if the existing node does not have any left child,
      //meaning that if the `left` pointer is empty
      //then we can just instantiate and insert the new node
      //as the left child of that node, passing `this` as the parent.
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        //if the node has an existing left child,
        //then we recursively call the `insert` method
        //so the node is added further down the tree.
        this.left.insert(key, value);
      }
    } else {
      //Similarly, if the new key is greater than the node's key
      //then you do the same thing, but on the right-hand side.
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  find(key) {
    //if the item is found at the root then return that value
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      //if the item you are looking for is less than the root
      //then follow the left child
      //if there is an existing left child,
      //then recursively check its left and/or right child
      //until you find the item.
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      //if the item you are looking for is greater than the root
      //then follow the right child
      //if there is an existing right child,
      //then recursively check its left and/or right child
      //until you find the item.
      return this.right.find(key);
    } else {
      //You have search the treen and the item is not in the tree
      throw new Error("Key Error");
    }
  }
  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        //If the node only has a left child,
        //then you replace the node with its left child.
        this._replaceWith(this.left);
      } else if (this.right) {
        //And similarly if the node only has a right child
        //then you replace it with its right child.
        this._replaceWith(this.right);
      } else {
        //If the node has no children then
        //simply remove it and any references to it
        //by calling "this._replaceWith(null)".
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Error");
    }
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

function main() {
  const test = new BinarySearchTree();
  console.log("Running");
  test.insert(3);
  test.insert(1);
  test.insert(4);
  test.insert(6);
  test.insert(9);
  test.insert(2);
  test.insert(5);
  test.insert(7);
  test.insert(9);
  findMaxHeight(test);
  console.log(isBST(test));
}

function findMaxHeight(test) {
    //base case
  if (!test) {
    return 0;
  }
  const right = 1 + findMaxHeight(test.right);
  const left = 1 + findMaxHeight(test.left);
  console.log("left:", left, "right:", right);
  return right > left ? right : left;
}

function isBST(test) {
    let prevKey;
    //base case
  if (!test) {
    return false;
  }
  console.log('running')
  if (test.left) {
      console.log('left running',test.left.key)
      // how to grab previous key?
    if (test.left.key) {
      isBST(test.left);
    } else {
      return false;
    }
  }
  if (test.right) {
    if (test.right.key) {
      isBST(test.right);
      console.log('right running')
    } else {
      return false;
    }
  }
  return true;
}

main();
