function solution(my_string) {
    // split("").map(el => isNaN(el) ? el : null).filter(el => el !== null).sort()
    var answer = my_string
        .split("")
        .map(el => !isNaN(el) ? +el : " ")
        .filter(el => el !== " ")
        .sort((a, b) => a - b);
    
    return answer;
}