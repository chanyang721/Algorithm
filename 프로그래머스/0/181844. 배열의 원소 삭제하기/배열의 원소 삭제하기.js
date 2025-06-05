function solution(arr, delete_list) {
    // for arr i = 0 -> len
    //      if !delete_list.includes(arr[i])
    //          asnwer.push(arr[i])
    var answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (!delete_list.includes(arr[i])) {
            answer.push(arr[i])
        }
    }
    
    return answer;
}