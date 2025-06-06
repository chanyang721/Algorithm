function solution(a, b) {
    // 홀짝 -> 점수
    var answer = 0;
    const aIsOdd =  a % 2 === 1, bIsOdd = b % 2 === 1;
    if (aIsOdd && bIsOdd) {
        answer = Math.pow(a,2) + Math.pow(b,2)
    } else if (aIsOdd || bIsOdd) {
        answer = 2* (a + b)
    } else if (!aIsOdd && !bIsOdd) {
        answer = Math.abs(a-b)
    }
    
    return answer;
}