function solution(numbers, n) {
    // let sum = 0
    // let idx = 0
    // while (sum > n)
    //      sum += numbers[idx]
    //      idx++
    let sum = 0, idx = 0;
    while (sum <= n) {
        sum += numbers[idx]
        idx++
    }
    var answer = sum;
    return answer;
}