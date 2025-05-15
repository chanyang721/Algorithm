function solution(num_list) {
    var answer = [...num_list];
    const last_el = num_list[num_list.length-1] > num_list[num_list.length-2] 
        ? num_list[num_list.length-1] - num_list[num_list.length-2]
        : num_list[num_list.length-1] * 2
    answer.push(last_el)
    return answer;
}