import  BinarySearchTree from './1.二叉搜索树';
import { Compare, defaultCompare } from './util';
import { Node } from './node';

class RedBlackNode extends Node {
    constructor(key) {
        super(key);
        this.key = key;
        this.color = Colors.RED; //默认创建为红色
        this.parent = null; // 指向父节点的引用
    }
    isRed() {
        return this.color === Colors.RED;
    }
}

class RedBlackTree extends BinarySearchTree {
        constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    insert(key) {
        if (this.root == null) { // {1}
          this.root = new RedBlackNode(key); // 树是空的，就创建红黑树
          this.root.color = Colors.BLACK; //设置根节点为黑色
        } else {
          const newNode = this.insertNode(this.root, key); //插入节点
          this.fixTreeProperties(newNode); //验证红黑树规则是否得到满足
        }
    }
    insertNode(node, key) {
        if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            if (node.left == null) {
                node.left = new RedBlackNode(key);
                node.left.parent = node; // {8}指定父节点的引用
                return node.left; // {9}
            }
            else {
                return this.insertNode(node.left, key);
            }
        }
        else if (node.right == null) {
            node.right = new RedBlackNode(key);
            node.right.parent = node; // {10}
            return node.right; // {11}
        }
        else {
            return this.insertNode(node.right, key);
        }
    }
    //验证红黑树规则是否得到满足 参数是新节点
    fixTreeProperties(node) {
        // 验证它的父节点是否是红色，以及这个节点是否不是黑色
        while (node && node.parent && node.parent.color.isRed() && node.color !== Colors.BLACK) { // {2}
            let parent = node.parent; // {3}
            const grandParent = parent.parent; // 祖父节点
            // 情形A：父节点是左侧子节点
            if (grandParent && grandParent.left === parent) { // {5}
                const uncle = grandParent.right; // {6}
                // 情形1A：叔节点也是红色——只需要重新填色
                if (uncle && uncle.color === Colors.RED) { //这种情况从新上色
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent; // 为什么要这样？？
                }
                else {
                    // 情形2A：节点是右侧子节点——左旋转
                    if (node === parent.right) {
                        this.rotationRR(parent); // {12}
                        node = parent; //这两行主要是为了记录 我觉得应该有别的写法
                        parent = node.parent; // 
                    }
                    // 情形3A：节点是左侧子节点——右旋转
                    this.rotationLL(grandParent); // {15}
                    parent.color = Colors.BLACK; // {16}
                    grandParent.color = Colors.RED; // {17}
                    node = parent; //又不返回node 为什么给node赋值？
                }
            }
            else { // 情形B：父节点是右侧子节点
               const uncle = grandParent.left; // {9}
               // 情形1B：叔节点是红色——只需要重新填色
               if (uncle && uncle.color === Colors.RED) { //这种情况从新上色
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;  // 为什么要这样？？
                }
                else {
                    // 情形2B：节点是左侧子节点——左旋转
                    if (node === parent.left) {
                        this.rotationLL(parent); // {19}
                        node = parent;
                        parent = node.parent;
                    }
                    // 情形3B：节点是右侧子节点——左旋转
                    this.rotationRR(grandParent); // {20}
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;
                }
            }
        }
        this.root.color = Colors.BLACK; //保证根节点的颜色始终是黑色
    }

    rotationLL(node) {
        const tmp = node.left;
        node.left = tmp.right;
        if (tmp.right && tmp.right.key) {
            tmp.right.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent) {
            this.root = tmp;
        }
        else {
            if (node === node.parent.left) {
                node.parent.left = tmp;
            }
            else {
                node.parent.right = tmp;
            }
        }
        tmp.right = node;
        node.parent = tmp;
    }
    //这里的node节点是前面的P节点
    //和自平衡树的区别：1.修改节点后要同时修改该节点parent属性的指向位置 2.要考虑旋转后的挂载问题
    rotationRR(node) {
        const tmp = node.right;    //tmp节点其实是前面的n节点
        node.right = tmp.left; //
        if (tmp.left && tmp.left.key) {  //检测（n）节点的左侧是否有节点
            tmp.left.parent = node;         //修改它的parent因为这是红黑树
        }
        tmp.parent = node.parent; //修改tmp（n）节点的parent属性
        if (!node.parent) {  //如果node（p）节点没有父节点，则让他为根节点
            this.root = tmp;
        }
        else {  //大部分都是这种情况 讨论tmp（n）节点挂载到哪里
            if (node === node.parent.left) {  //判断node（p）节点是（g）节点的左边还是右边考虑
                node.parent.left = tmp;
            }
            else {
                node.parent.right = tmp;
            }
        }
        tmp.left = node;
        node.parent = tmp;
    }
}
