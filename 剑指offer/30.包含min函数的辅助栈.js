//包含 min 函数的栈（辅助栈)
//剑指 Offer 30. 包含 min 函数的栈

class MinStack{
    constructor(){
        this.normalStack = []
        this.minStack = []
    }
    push(value){
        //向主栈中加入数据
        this.normalStack.push(value)
        //向辅助栈中插入数据 判断是否要插入
        if(this.minStack.length){
            if(this.minStack[this.minStack.length-1]>=value){
                this.minStack.push(value)
            }
        }else{
            this.minStack.push(value)
        }

    }
    pop(){
        if (this.size()){
            const  popValue = this.normalStack.pop()
            //比较大小 更新minStack
            if(this.minStack[this.minStack.length-1]===popValue){
                this.minStack.pop()
            }
            return popValue
        }
        return -1
    }
    min(){
        return this.minStack[this.minStack.length-1]
    }
    top(){
        return this.normalStack[this.size()-1]
    }
    size(){
        return this.normalStack.length
    }
}


const minStack = new MinStack()

minStack.push(-2)
minStack.push(0)
minStack.push(-3)


// console.log(minStack.normalStack)
// console.log(minStack.minStack)

console.log(minStack.min())  

console.log(minStack.pop())
console.log(minStack.top())

console.log(minStack.min())  
