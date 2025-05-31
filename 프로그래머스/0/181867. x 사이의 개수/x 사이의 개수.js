function solution(myString) {
    // 1. split(divider).map(el => el.len)
    const divider = "x"
    var answer = myString.split(divider).map(el => el.length)
    return answer;
}