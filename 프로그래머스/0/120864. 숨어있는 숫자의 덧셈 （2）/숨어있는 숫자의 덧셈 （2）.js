function solution(my_string) {
    // 1. split.map(el => isNaN(el) ? +el : " ").filter(el => el !== " ").reduce((a, c) => a+c)
    // 틀림 -> 연속된 수는 하나의 수로 표기해야함
    // 2. let num = ''; 
    //    for my_string, i = 0 -> len
    //          if (!isNaN(str[i])) num += str[i]
    //          else if (isNaN(str[i])) answer += +num, num = ''
    var answer = 0;
    let num = ''; 
    for (let i = 0; i < my_string.length; i++) {
        if (!isNaN(my_string[i])) {
            num += my_string[i]
        } else if (isNaN(my_string[i])) {
            answer += +num;
            num = '';
        }
    }
    if (num) answer += +num;
    
    return answer;
}