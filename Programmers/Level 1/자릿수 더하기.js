function solution(n) {
    // n의 각자리수의 합을 구해서 리턴
    const result = String(n)
    .split("")
    .map(el => Number(el))
    .reduce((acc, cur) => acc + cur)
    
    return result;
}