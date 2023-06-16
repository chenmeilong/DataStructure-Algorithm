/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

//模拟栈
var validateStackSequences = function(pushed, popped) {
    let stack =[]
    for(let i=0,j=0; i<pushed.length; i++){
        stack.push(pushed[i])
        while(stack.length && stack[stack.length-1]==popped[j]){
            stack.pop()
            j++
        }
    }
    return stack.length==0
};

console.log(validateStackSequences(pushed = [1,2,3,4,5], popped = [4,5,3,2,1]))  //true
console.log(validateStackSequences(pushed = [1,2,3,4,5], popped = [4,3,5,1,2]))  //false