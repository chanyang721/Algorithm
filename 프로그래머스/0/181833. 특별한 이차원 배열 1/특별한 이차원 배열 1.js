function solution(n) {
    const size = n
    var answer = Array.from({length:size}, (_, i) => Array.from({length:size}, (_, j) => i === j ? 1 : 0))
    return answer
}