function solution(picture, k) {
    // 가로 세로 k 배
    // 요소 += 요소 => 1번줄
    // 1번 줄 복사
    // answer.push(1, 2번줄)
    // for picture i = 0 -> picture.len
    var answer = [];
    for (let i = 0; i < picture.length; i++) {
        let row = picture[i].split("")
                    .map(el => el.repeat(k))
                    .join("")
        
        answer = answer.concat(new Array(k).fill(row))
    }
    
    return answer;
}