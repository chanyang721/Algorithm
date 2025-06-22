function solution(num_list, n) {
    // 원소 2개씩 묶어서 리턴
    // for i = 0 -> len i += n
    //      const el = []
    //      const el = num_list.slice(i, i + n)
    //      answer.push(el)
    var answer = [];
    
    for (let i = 0; i < num_list.length; i += n) {
        const el = num_list.slice(i, i + n)
        answer.push(el)
    }
    
    return answer;
}