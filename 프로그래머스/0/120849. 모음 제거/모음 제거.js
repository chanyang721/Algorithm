function solution(my_string) {
    // let targets = aeiou
    // my_string.split("").filter(str => taget.includes(str))
    let targets = "aeiou"
    var answer = my_string.split("").filter(str => !targets.includes(str)).join("");
    return answer;
}