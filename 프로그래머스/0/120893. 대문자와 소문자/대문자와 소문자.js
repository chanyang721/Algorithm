function solution(my_string) {
    // u -> l, l -> u
    // if (my_string[i].toUpperCase === myString[i]) toLowerCase
    // if (my_string[i].toLowerCase === myString[i]) toUpperCase
    var answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i].toUpperCase() === my_string[i]) {
            answer += my_string[i].toLowerCase()
        } else if (my_string[i].toLowerCase() === my_string[i]) {
            answer += my_string[i].toUpperCase()
        }
    }
    
    return answer;
}