function solution(num_list, n) {
    // n = 길이 => idx = n-1;
    const idx = n-1;
    var answer = num_list.slice(0, idx+1);
    return answer;
}