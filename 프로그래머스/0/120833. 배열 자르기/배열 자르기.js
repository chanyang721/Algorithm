function solution(numbers, num1, num2) {
    // slice(num1, num2+1)
    var answer = numbers.slice(num1, num2 + 1);
    return answer;
}