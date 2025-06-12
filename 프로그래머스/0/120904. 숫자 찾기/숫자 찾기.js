function solution(num, k) {
    var answer = num.toString().split("").indexOf(k.toString())
    return answer < 0 ? answer : answer + 1
}