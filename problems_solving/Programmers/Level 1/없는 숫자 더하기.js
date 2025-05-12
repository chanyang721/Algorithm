function solution(numbers) {
    let result = numbers.reduce((acc, cur) => acc + cur)

    return 45 - result;
}