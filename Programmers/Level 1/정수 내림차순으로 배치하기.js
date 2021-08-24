function solution(n) {
    // 정수 n의 각 자릿수를 큰것부터 작은순으로 정렬한 새로운 정수를 리턴
    let result = String(n)
    .split("")
    .sort((a, b) => a > b ? -1 : 1)
    .join("")
    
    return Number(result);
}