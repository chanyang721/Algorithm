function solution(friends, gifts) {
    // 선물지수: 이번달까지 준 선물 - 받은 선물 수
        // 선물 지수가 0인 경우: A -> B에게 선물 줌
        // 선물 지수가 A, B가 같은 경우: 선물 교환 없음
    // A,B 간 선물을 많이 준 사람은 다음달에 하나 받음
    // 다음달에 선물을 주고 받는 경우, 가장 선물을 많이 받는 사람의 선물 수?
    // 선물 이력 행렬 생성
    // 사람 별 선물 지수 생성
    // 다음달 선물 받을 수 계산
    const n = friends.length;
    const nameMap = new Map();
    friends.forEach((name, idx) => nameMap.set(name, idx));
    
    const gArr = Array.from({length: n }, () => Array(n).fill(0))
    const givers = Array(n).fill(0)
    const recivers = Array(n).fill(0)


    // 선물 이력 생성
    for (const g of gifts) {
        const [from, to] = g.split(" ");
        const giver = nameMap.get(from);
        const reciver = nameMap.get(to);
        gArr[giver][reciver]++
        givers[giver]++
        recivers[reciver]++
    }

    // 사람 별 선물 지수 생성
    const scores = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        scores[i] = givers[i] - recivers[i];
    }
    
    
    // 다음달 선물 받을 수 계산
    const resultArr = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) continue; // 스스로 주는 경우 없음
            
            const giveToI = gArr[j][i]
            const giveToJ = gArr[i][j]
            
            if(giveToJ > giveToI) {
                resultArr[i]++
            }else if (giveToI === giveToJ) {
                if (scores[i] > scores[j]){ 
                    resultArr[i]++
                }
            }
        }
    }

    return Math.max(...resultArr);;
}