function solution(my_string, index_list) {
    // for i -> index_list.len
    // answer += my_string[list[i]]
    var answer = '';
    index_list.forEach(i => answer += my_string[i]);
    return answer;
}