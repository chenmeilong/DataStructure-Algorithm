
import  BinarySearchTree from './1.二叉搜索树';

const BalanceFactor = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
};

class AVLTree extends BinarySearchTree {
        constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    getNodeHeight(node) {
        if (node == null) {
        return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
    }


    getBalanceFactor(node) {
        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch (heightDifference) {
            case -2:
            return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
            return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
            case 1:
            return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
            case 2:
            return BalanceFactor.UNBALANCED_LEFT;
            default:
            return BalanceFactor.BALANCED;
        }
    }
    //左-左（LL）：向右的单旋转   node节点作为根节点开始旋转
    rotationLL(node) {
        const tmp = node.left; // {1}
        node.left = tmp.right; // {2}
        tmp.right = node; // {3}
        return tmp;
    }
    //右-右（RR）：向左的单旋转
    rotationRR(node) {
        const tmp = node.right; // {1}
        node.right = tmp.left; // {2}
        tmp.left = node; // {3}
        return tmp;
    }
    //左-右（LR）：向右的双旋转（先 LL 旋转，再 RR 旋转）
    rotationLR(node) {
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }
    rotationRL(node) {
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    //插入节点
    insert(key) {
        this.root = this.insertNode(this.root, key);
    }
    insertNode(node, key) {
    // 像在BST树中一样插入节点
        if (node == null) {
            return new Node(key);
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node; // 重复的键
        }
        // 如果需要，将树进行平衡操作
        const balanceFactor = this.getBalanceFactor(node); // 获取根节点平衡因子
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) { // 左边多两层
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) { //判断比较是否插入的键小于左侧子节点的键
                node = this.rotationLL(node); // {4} 直接return 其实也是一样的
            } else {
            return this.rotationLR(node); // {5}
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) { //右边多两层 右不平衡
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) { // {7}
                node = this.rotationRR(node); // {8}
            } else {
            return this.rotationRL(node); // {9}
            }
        }
        return node;
    }

    removeNode(node, key) {
        node = super.removeNode(node, key); // {1}
        if (node == null) {
          return node; // null，不需要进行平衡
        }
        // 检测树是否平衡
        const balanceFactor = this.getBalanceFactor(node); // {2}
        if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) { //左多两层
            const balanceFactorLeft = this.getBalanceFactor(node.left); // {4}计算左侧字树的平衡因子
            if (balanceFactorLeft === BalanceFactor.BALANCED ||balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) { // {5}
                return this.rotationLL(node); // {6}
            }
            if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) { // {7}
                return this.rotationLR(node.left); // {8}
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) { //右多两层
            const balanceFactorRight = this.getBalanceFactor(node.right); // {10}计算右侧字树的平衡因子
            if (balanceFactorRight === BalanceFactor.BALANCED || balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) { // {11}
                return this.rotationRR(node); // {12}
            }
            if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) { // {13}
                return this.rotationRL(node.right); // {14}
            }
        }
        return node;
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
    rotationRR(node) {
        const tmp = node.right;
        node.right = tmp.left;
        if (tmp.left && tmp.left.key) {
            tmp.left.parent = node;
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
        tmp.left = node;
        node.parent = tmp;
    }
}
