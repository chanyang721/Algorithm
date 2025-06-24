function solution(balls, share) {
    // 서로 다른 구슬을 구하는 방법
    // 조합  nCr = n! / r! * (n-r)!
    function factorial (n) {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i 
        }
        return result
    }
    
    var answer = Math.round(
        factorial(balls) / (factorial(share) * factorial(balls - share))
    );
    return answer;
}