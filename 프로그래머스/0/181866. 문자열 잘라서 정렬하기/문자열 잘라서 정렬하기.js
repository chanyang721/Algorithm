function solution(myString) {
    // .split(divider).sort((a, b) => a - b)
    const divider = "x"
    var answer = myString.split(divider).filter(el => el !== '').sort()
    return answer;
}