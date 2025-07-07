function solution(n, m, section) {
    // 현재 section[i] 위치부터 롤러로 m미터 칠한다
    // 롤러가 칠한 범위 밖의 첫 구역을 찾는다
    let answer = 0;
    let i = 0;

    while (i < section.length) {
        const start = section[i];
        const end = start + m - 1;

        answer += 1;

        while (i < section.length && section[i] <= end) {
            i++;
        }
    }

    return answer;
}