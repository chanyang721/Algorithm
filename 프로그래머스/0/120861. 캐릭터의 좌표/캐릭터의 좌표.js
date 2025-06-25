function solution(keyinput, board) {
    // 방향키: up = y + 1, down = y - 1, left = x - 1, right = x + 1
    // keyinput = 방향키[]
    // board = [w, l]
    // const startAt = [0, 0]
    // let [x, y] = [0, 0]
    // const [w, l] = board
    // for keyinput i = 0 -> len
    //      let [nx, ny] = [x, y]
    //      if keyinput[i] -> x ~ y
    //      if (abs(nx) <= w && abs(ny) <= l) 
    //          x = nx
    //          y = ny
    // return x, y
    const startAt = [0, 0]
    let [x, y] = startAt
    const [w, l] = board.map(el => el = Math.floor(el/ 2)) // 중앙 시작
    for (let i = 0; i < keyinput.length; i++) {
        let [nx, ny] = [x, y]
        if (keyinput[i] === 'up') ny += 1;
        else if (keyinput[i] === 'down') ny -= 1;
        else if (keyinput[i] === 'left') nx -= 1;
        else if (keyinput[i] === 'right') nx += 1;
        
        if (Math.abs(nx) <= w && Math.abs(ny) <= l) {
            x = nx
            y = ny
        }
    }
    var answer = [x, y];
    return answer;
}