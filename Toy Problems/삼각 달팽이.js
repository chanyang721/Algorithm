function solution(n) {
    // 피라미드 모양의 배열 선언
    // 방향이 정해짐, 번호를 순서대로 넣는다.
    // 꺽는 횟수도 n번이다.
    let result = Array(n).fill().map((el, idx) => Array(idx + 1));

    let num = 0;
    let row = -1, col = 0;
    while(n > 0) {
        // 아래 대각선 
        for (let i = 0; i < n; i++) { result[++row][col] = ++num };
        // 오른쪽
        for (let i = 0; i < n - 1; i++) { result[row][++col] = ++num };
        // 위쪽 대각선
        for (let i = 0; i < n - 2; i++) { result[--row][--col] = ++num };
        // 꺽은 횟수 n - 3
        n -= 3;
    }
    
    return result.flat();
}