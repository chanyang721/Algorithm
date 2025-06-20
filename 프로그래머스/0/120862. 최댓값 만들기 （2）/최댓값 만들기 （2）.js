function solution(numbers) {
    // for i , for j = i + 1
    // nums = []
    const nums = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            nums.push(numbers[i] * numbers[j])
        }
    }
    var answer = Math.max(...nums);
    return answer;
}