function solution(n, w, num) {
    const totalRows = Math.ceil(n / w);

    // 택배 번호 num이 위치한 층(0-indexed)
    const row = Math.floor((num - 1) / w);
    // 해당 층의 진행 방향에 따른 열(0-indexed)
    const isEvenRow = row % 2 === 0;
    const col = isEvenRow
        ? (num - 1) % w           // 왼→오 방향
        : w - 1 - ((num - 1) % w); // 오→왼 방향

    let count = 0;

    for (let r = row; r < totalRows; r++) {
        let targetIndex = r * w + (r % 2 === 0 ? col : (w - 1 - col)) + 1;

        // 상자 번호가 n을 넘지 않는 경우만 카운트
        if (targetIndex <= n) {
            count++;
        }
    }

    return count;
}