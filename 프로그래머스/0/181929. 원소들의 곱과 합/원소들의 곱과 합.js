function solution(num_list) {
    let sum = 0;
    let multi = 1;
    num_list.forEach(el => {
        sum += el
        multi *= el
    })
    var answer = Math.pow(sum, 2) > multi ? 1 : 0
    return answer;
}