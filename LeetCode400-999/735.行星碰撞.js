var asteroidCollision = function(asteroids) {
    let res = []
    
    for(let num of asteroids){
        let alive = true
        while(alive && num<0 && res[res.length-1]>0){
            let end = res[res.length-1]
            alive = end<-num //false没撞上或者太小撞不掉  true撞掉了
            if (end<=-num ){
                res.pop()
            }
        }
        if(alive) res.push(num)
    }
    return res
};
