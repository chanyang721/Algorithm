function solution(num_list, n) {
    // 1: n+1 ~ end 
    // 2. 0 ~ n
    // n = 길이 => 인덱스로 치환해서 사용
    var answer = [];
    const idx = n - 1;
    const afterN = num_list.slice(idx+1)
    const beforeN = num_list.slice(0, idx+1)
    answer = [...afterN, ...beforeN]
    return answer;
}