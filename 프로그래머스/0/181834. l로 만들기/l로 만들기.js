function solution(myString) {
    // alpha = l 이전 알파벳 => l
    // myString.map(alpha => alpha < l ? alpha = l : alpha)
    var answer = myString.split("")
            .map(alpha => alpha < "l" ? alpha = "l" : alpha)
            .join("");
    return answer;
}