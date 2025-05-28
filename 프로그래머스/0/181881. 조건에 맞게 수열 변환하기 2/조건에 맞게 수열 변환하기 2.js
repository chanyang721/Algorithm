function solution(arr) {
    // while 0 -> x ? arr(x) === arr(x+1) 인 x ?
    // if el is even and >= 50 ? el / 2
    // if el is odd and < 50 ? el * 2 + 1
    var answer = 0;
    while (true) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
            const el = arr[i]
            if (!(el % 2) && el >= 50) {
                arr[i] = el / 2
                count++
            }
            else if ((el % 2) && el < 50) {
                arr[i] = el * 2 + 1
                count++
            }
        }
        if (count === 0) break;
        answer++
    }

    return answer;
}