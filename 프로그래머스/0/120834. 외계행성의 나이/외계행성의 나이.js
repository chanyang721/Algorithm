function solution(age) {
    // 숫자 -> 알파벳
    // a:0 ~ j:9
    const map = {"0":"a","1":"b","2":"c","3":"d","4":"e","5":"f","6":"g","7":"h","8":"i","9":"j"};
    var answer = age.toString().split("").map(el => map[el]).join("");
    return answer;
}