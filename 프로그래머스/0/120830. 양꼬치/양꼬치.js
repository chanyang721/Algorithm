function solution(n, k) {
    // n 양꼬치 1 -> 12000 => n * 12000
    // k 음료수 1 -> 2000 => k * 2000
    // n 10 당 음료수 1개 서비스 => Math.floor(n / k) => 서비스
    const sumN = n * 12000
    const sumK = k * 2000
    const service = Math.floor(n / 10) * 2000
    var answer = sumN + sumK - service;
    return answer;
}