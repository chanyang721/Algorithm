function solution(num) {
    // 콜라츠 추측 => 다음 규칙을 반복하면 모든 수를 1로 만들 수 있다는 추측이다. 
    // 규칙 1. 짝수라면 2로 나눈다. 
    // 규칙 2. 홀수라면 3을 곱하고 1을 더한다.
    // 위를 반복한다.
    // 입력된 num을 몇번 반복해야 1이 되는지를 리턴
    // 500번 반복되도 1이 안나오면 -1을 리턴
    // 숫자를 셀 count = 0; 선언
    // count === 500이면 -1 리턴
    let count = 0;
    for (let i = 0; i < 501; i++) {
        if (count === 500) return -1;
        if (num === 1) return count;
        if (num % 2 === 1) num = num * 3 + 1;
        else if (num % 2 === 0) num = num / 2;
        count++;
    }
}