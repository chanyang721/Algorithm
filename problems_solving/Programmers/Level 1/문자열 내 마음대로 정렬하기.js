function solution(strings, n) {
    // 요소가 문자열인 배열 strings
    // 정수 n
    // 각 요소문자열의 n번 인덱스를 기준으로 배열을 오름차순 정렬한 배열을 리턴
    // n번 인덱스가 같다면 문자열 전체를 사전식 정렬순서로 리턴
    let result = strings
        .sort((a, b) => {
            if (a[n] < b[n]) return -1;
            if (a[n] === b[n]) {
                return a < b ? -1 : 1
            };
        })
    
    return result;
}