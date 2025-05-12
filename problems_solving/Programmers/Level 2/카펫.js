function solution(brown, yellow) {
    // 색의 개수
    // 중간을 노랑으로 채운 가로 세로길이를 리턴 [ 가로, 세로 ]
    // 테두리 1줄만 갈색으로 채워짐
    // 내부는 노란색으로 채울수 있어야함
    let result;
    let row = yellow;
    for (let col = 1; col < yellow + 1; col++) {
        if (2 * row + 2 * col + 4 === brown) {
            return result = [ row + 2, col + 2 ];
        }
        row = yellow / (col + 1);
    }
    
    return result;
}   