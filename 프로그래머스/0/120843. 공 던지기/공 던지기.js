function solution(numbers, k) {
    // 0부터 시작, 2칸씩 이동, k번째 던짐 -> (k-1)번 이동
    var answer = 0
    const len = numbers.length;
    answer = ((k-1)*2) % len
    return numbers[answer];
}