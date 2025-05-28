function solution(num_list) {
    // len >= 11 return sum 
    // sum <= 10 return multi
    // sum = num_list.reduce((a, c) => a+c)
    const len = num_list.length;
    var answer = 0;
    
    if (len >= 11) answer = num_list.reduce((a, c) => a+c);
    else if (len < 11) answer = num_list.reduce((a, c) => a*c);
    
    return answer;
}