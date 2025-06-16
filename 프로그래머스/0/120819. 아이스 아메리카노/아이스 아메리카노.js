function solution(money) {
    // i = 5500
    // m / 5500, m % 5500
    var answer = [Math.floor(money / 5500), Math.floor(money % 5500)];
    return answer;
}