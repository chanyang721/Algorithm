function solution(numbers) {
    // 원소의 평균값 numbers.reduce((a, c) => a+c) / numbers.length
    var answer = numbers.reduce((a, c) => a+c) / numbers.length
    return answer;
}