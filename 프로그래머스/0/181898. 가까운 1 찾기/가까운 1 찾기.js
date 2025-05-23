function solution(arr, idx) {
    // arr i > idx, and i>0
    var answer = 0;
    answer = arr.slice(idx).indexOf(1)
    return answer < 0 ? answer : idx + answer;
}