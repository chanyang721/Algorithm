// 테스트 7 〉 (113.49ms, 40.7MB) //
function solution(rows, columns, queries) {
    // 좌표에 해당하는 구역을 찾는다. 
    // 1부터 rows * columns까지의 숫자
    // 가장 작은 값을 result에 넣는다
    // 시계방향으로 돌린 값을 적용한다. 
    // 반복
    const matrix = [];
    let el = [];
    for (let i = 1; i <= rows * columns + 1; i++) {
        if (el.length === columns) {
            matrix.push(el)
            el = [];
        }
        el.push(i);
    }

    
    let result = [];
    
    for (let i = 0; i < queries.length; i++) {
        let [ x1, y1, x2, y2 ] = queries[i];
        // 일렬로 넣는다. 
        // 제일 뒷 수를 뺴서 앞에 넣는다. 
        // 순서대로 다시 넣는다. 
        let base = [];
        base.push(...matrix[x1 - 1].slice(y1 - 1, y2 - 1));
        base.push(...matrix.map(el => el = el[y2 - 1]).slice(x1 - 1, x2))
        base.push(...matrix[x2 - 1].slice(y1 - 1, y2 - 1).reverse());
        base.push(...matrix.map(el => el = el[y1 - 1]).slice(x1, x2 - 1).reverse());
        base.unshift(base.pop());
        result.push(Math.min(...base))
        
        
        let left = base.slice(-(x2 - x1 - 1)).reverse();
        let right = base.slice(y2 - y1 + 1, y2 - y1 + x2 - x1)
        let top = base.slice(0, y2 - y1 + 1)
        let bot = base.slice(y2 - y1 + x2 - x1, y2 - y1 + x2 - x1 + y2 - y1 + 1)
        
 
        matrix[x1 - 1].splice(y1 - 1, y2 - y1 + 1, ...top)
        matrix[x2 - 1].splice(y1 - 1, y2 - y1 + 1, ...bot.reverse())
        let idx = 0;
        for (let j = x1; j < x2 - 1; j++) {
            matrix[j][y1 - 1] = left[idx];
            matrix[j][y2 - 1] = right[idx];
            idx++;
        }

    }
    
    return result;
}