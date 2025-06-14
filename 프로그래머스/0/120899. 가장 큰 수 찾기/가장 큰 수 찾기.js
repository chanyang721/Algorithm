function solution(array) {
    // 1. Math.max() -> indexOf
    // 2. sort -> at(-1) -> indexOf
    const max = Math.max(...array)
    const idx = array.indexOf(max)
    var answer = [max, idx];
    return answer;
}