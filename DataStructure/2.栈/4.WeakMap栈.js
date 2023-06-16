// 现在我们知道了，items 在 Stack 类里是真正的私有属性。采用这种方法，代码的可读性不强，而且在扩展该类时无法继承私有属性。鱼和熊掌不可兼得！
const items = new WeakMap(); // {1} 声明一个 WeakMap 类型的变量 items。

class Stack {
    constructor () {
        items.set(this, []); // {2}在 constructor 中，以 this（Stack 类自己的引用）为键，把代表栈的数组存入 items。
    }
    push(element){
        const s = items.get(this); // {3}从 WeakMap 中取出值，即以 this 为键（行{2}设置的）从 items 中取值。
        s.push(element);
    }
    pop(){
        const s = items.get(this);
        const r = s.pop();
        return r;
    }
  // 其他方法
}



