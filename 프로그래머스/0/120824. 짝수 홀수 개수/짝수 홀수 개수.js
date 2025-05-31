function solution(num_list) {
    // 원소가 짝수, 홀수의 개수 [even, odd]
    let even = 0, odd = 0;
    num_list.map(num => num % 2 === 0 ? even++ : odd++);
    var answer = [even, odd];
    return answer;
}