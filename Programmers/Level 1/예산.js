function solution(d, budget) {
    // 전체 예산 budget
    // 필요 금액 d = []
    // 지원시 필요 금액을 모두 지원해야한다. 
    // 최대 몇개의 부서에 물품을 지원할 수 있는지를 리턴
    // 오름차순 정렬 후 더하면서 budget을 넘는 순간의 인덱스 - 1을 리턴
    let sortD = d.sort((a, b) => a - b);
    let sum = 0;
    let idx = 0;
    
    while(budget >= 0) {
        budget -= sortD[idx];
        idx++;
    }
    
    return idx - 1;
}

