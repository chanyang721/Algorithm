function solution(num_list, n) {
    // for i = 0 -> n i += n answer.push(num_list[i])
    var answer = [];
    for (let i = 0; i < num_list.length; i += n) answer.push(num_list[i]);
    return answer;
}