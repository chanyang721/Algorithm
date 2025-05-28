function solution(num_list) {
    // idx 0 -> 1
    // 홀수 원소 = 짝수 인덱스
    // 짝수 원소 = 홀수 인덱스
    let odd = 0, even =0;
    for (let i = 0; i < num_list.length; i++) {
        if (i % 2 === 0) odd+=num_list[i]
        else if (i % 2 !== 0) even+=num_list[i]
    }
    var answer = Math.max(odd, even);
    return answer;
}