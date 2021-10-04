function solution(citations) {
    // n편 중 h번 이상 인용된 논문이 h편 이상이면 h의 최대값이 과학자의 H-index이다. 
    // 각 논문의 인용 횟수를 담은 배열 citation
    // 5편 중 3번 이상 인용된 논문이 3편 이상이다.
    // 배열에서 요소의 크기보다 큰 다른 요소가 요소의 크기 이상 있다.
    let result = 0; 
    const base = citations.sort((a, b) => b - a);
    let n = citations.length;
    
    for (let paper = 0; paper < n; paper++) {
        let quos = base[paper];
        if (quos < result) continue;
        
        let papers = base.filter(el => el >= quos).length;       
        if (quos >= papers) result = papers;
    }
    
    return result;
}