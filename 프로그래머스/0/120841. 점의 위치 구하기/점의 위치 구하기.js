function solution(dot) {
    // x > 0 & y > 0 => 1
    // x < 0 & y > 0 => 2
    // x < 0 & y < 0 => 3
    // x > 0 & y < 0 => 4
    // const [x, y] = dot
    // if ~ answer
    const [x, y] = dot
    var answer = 0;
    // if (x > 0 && y > 0) {
    //     answer = 1
    // } else if (x < 0 && y > 0) {
    //     answer = 2
    // } else if (x < 0 && y < 0) {
    //     answer = 3
    // } else if (x > 0 && y < 0) {
    //     answer = 4
    // }
    const sx = Math.sign(x)
    const sy = Math.sign(y)
    const matrix = {
        "1": { "1": 1, "-1": 4 },
        "-1": { "1": 2, "-1": 3 }
    }
    answer = matrix[sx][sy]
    
    return answer;
}