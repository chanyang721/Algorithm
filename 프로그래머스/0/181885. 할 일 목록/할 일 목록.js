function solution(todo_list, finished) {
    // for i = 0; i -> finished.length
    //      if(!finished[i]) answer.push(todo_list[i])
    var answer = [];
    for (let i = 0; i < finished.length; i++) {
        if (!finished[i]) {
            answer.push(todo_list[i])
        }
    }
    return answer;
}