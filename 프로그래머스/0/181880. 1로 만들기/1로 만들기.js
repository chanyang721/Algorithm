function solution(num_list) {
    // count = 0
    // even = even / 2
    // odd = (odd - 1) / 2
    var answer = 0;
    for (let i = 0; i < num_list.length; i++) {
        let num = num_list[i]
        while (num !== 1) {
            if (!(num % 2)) {
                num = num / 2
            }
            else if (num % 2) {
                num = (num-1) / 2
            }
            answer++
        }
    }

    return answer;
}