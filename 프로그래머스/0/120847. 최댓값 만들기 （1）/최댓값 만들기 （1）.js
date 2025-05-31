function solution(numbers) {
    // numbers max (el1 * el2)
    // 1. for i 0 -> len
    //      for j = i + 1 -> len
    var answer = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let num = numbers[i] * numbers[j];
            if (num > answer) {
                answer = num;
            }
        }
    }
    return answer;
}