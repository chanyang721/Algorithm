function solution(my_string) {
    // map(el => el.toLowerCase().sort((a,b) => a-b))
    var answer = my_string.split("")
            .map(str => str.toLowerCase())
            .sort()
            .join("")
    return answer;
}