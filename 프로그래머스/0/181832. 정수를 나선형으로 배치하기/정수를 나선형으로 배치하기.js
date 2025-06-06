function solution(n) {
    // n x n [] 1 ~ n^2 정수를 시계방향으로 돌려서 넣기
    // 2차원 배열 생성 Array.from ~ 
    // 방향 변수 dir 정의
    // 방향 결정 변수 정의 dx, dy
    // 
    var answer = Array.from({length: n}, () => Array.from({length:n}).fill(0));

    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    let x = 0, y = 0, dir = 0;
    
    for (let num = 1; num <= n * n; num++) {
        answer[x][y] = num;
        
        const nx = x + dx[dir]
        const ny = y + dy[dir]
        
        if (nx < 0 || nx >= n 
            || ny < 0 || ny >= n 
            || answer[nx][ny] !== 0
           ) {
            dir = (dir+1) % 4;
        }
        
        x += dx[dir]
        y += dy[dir]
    }
    
    return answer;
}