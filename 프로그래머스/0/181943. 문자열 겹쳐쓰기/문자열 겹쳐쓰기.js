function solution(my_string, overwrite_string, s) {
    var answer = "";
    const start = my_string.slice(0, s);
    const middle = overwrite_string;
    const last = my_string.slice(s + overwrite_string.length);
    answer = start + middle + last; 
    
    return answer;
}