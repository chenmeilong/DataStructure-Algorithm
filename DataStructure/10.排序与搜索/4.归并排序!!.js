//自己写法归并排序 自顶向下
function mergeSort(arr){
    if(arr.length <= 1 ) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}
//归并函数
function merge(left,right){
    let i =0 
    let j = 0
    let newArr = []
    while(i<left.length || j<right.length){
        if(j>=right.length || left[i] > right[j]){
            newArr.push(left[i])
            i++
        }else{
            newArr.push(right[j])
            j++
        }
    }
    return newArr
}


//自底向上  自己写的
function mergeSort(arr){
    for(let step = 1 ; step < arr.length; step+=step){
        for(let j = 0; j<arr.length; j=j+step+step){
            //进行step的归并排序  要考虑 结束情况   判断当前

            // 1.正常归并排序 //  2.后面的数组不完整   // 2.后面的数组为0
            let rightCount = arr.length-j-step
            if(rightCount>=step){
                let newArr = merge(arr.slice(j,j+step),arr.slice(j+step,j+step+step))
                arr.splice(j,step*2,...newArr)
            }else if(rightCount > 0 && rightCount<step){
                let newArr = merge(arr.slice(j,j+step),arr.slice(j+step,j+step+rightCount))
                arr.splice(j,step+rightCount,...newArr)
            }
        }
    }
    return arr
}




console.log(mergeSort([5,7,9,4,8,3]))
