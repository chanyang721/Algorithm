function solution(sizes) {
    // 가로 * 세로의 크기가 가장 작은 값을 리턴
    // sizes의 요소 배열을 sort
    // 0, 1번 인덱스를 따로 배열에 저장
    // 0번에서 가장 큰값, 1번에서 가장 큰값의 곱을 리턴
    let result = 0;
    let base = sizes.map(el => el.sort((a, b) => a - b));
    
    let col= [], row = [];
    for (let i = 0; i < base.length; i++) {
        row.push(base[i][0]);
        col.push(base[i][1]);
    }
    
    return Math.max(...row) * Math.max(...col);
}