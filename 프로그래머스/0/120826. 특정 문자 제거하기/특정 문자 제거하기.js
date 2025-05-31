function solution(my_string, letter) {
    // my_string에서 letter 제거 => my_string.split(letter).join("")
    var answer = my_string.split(letter).join("");
    return answer;
}