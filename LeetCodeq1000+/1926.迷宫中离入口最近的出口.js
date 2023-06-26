var nearestExit = function (maze, entrance) {
    let m = maze.length;
    let n = maze[0].length;
  
    let queue = [[...entrance,0]];
    maze[entrance[0]][entrance[1]] = '+'

    // 上下左右
    dx = [0,0,-1,1]
    dy = [-1,1,0,0]

    while (queue.length) {
      let [cx,cy,d] = queue.shift()
      
      for(let i=0;i<4;i++){
        nx = cx + dx[i]
        ny = cy + dy[i]
        // 新位置合法 且不为墙
        if(nx>=0 && nx<m && ny>=0 && ny<n && maze[nx][ny]==='.'){
            if(nx===0 || nx===m-1 || ny===0 || ny===n-1) return d+1
            maze[nx][ny] = '+'
            queue.push([nx,ny,d+1])
        }
      }
    }
    return -1;
};
  
console.log(nearestExit([["+","+",".","+"],[".",".",".","+"],["+","+","+","."]],[1,2]));