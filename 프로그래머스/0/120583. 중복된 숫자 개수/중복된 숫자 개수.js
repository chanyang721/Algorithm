function solution(array, n) {
    // filter. el === n).length
    var answer = array.filter(num => num === n).length;
    return answer;
}