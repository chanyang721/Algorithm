function solution(number) {
    // num % 9 === num.forEach(el => 합) % 9
    var answer = 0;
    number.split("").forEach(num => answer += +num)
    return answer % 9;
}