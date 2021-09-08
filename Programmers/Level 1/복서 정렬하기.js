function solution(weights, head2head) {
    // weights => 몸무게 
    // head2head => 복서의 전적
    // 정렬 규칙에 따라 정렬 후 리턴
    // 규칙 1. 승률이 높은 순서대로 내림차순
    // 규칙 2. 승률이 동일하면 몸무게 무거운 복서를 이긴 횟수가 많은 순서대로 내림차순
    // 규칙 3. 자신보다 무거운 복서를 이긴 횟수도 같다면, 자신의 몸무게가 무거운 복서가 앞으로 내림차순
    // 규칙 4. 자기 몸무게까지 동일한 복서들은 작은 번호가 앞으로 오름차순
    // weights -> 인덱스 + 1번 복서를 뜻함

    // 승률, 자신보다 몸무게 무거운 복서를 이긴 횟수, 자신의 몸무게, 복서의 번호 필요
    // 승률 => head2head에서 "W"의 개수 / "W","L" 개수
    // 몸무게가 무거운 복서를 이긴 횟수 => weights["W"인덱스] > weights["N"인덱스]인 경우 ++
    // 자신의 몸무게 => weights["N"인덱스]
    // 복서의 번호 => "N"인덱스 + 1
    let result = [];
    
    for (let record = 0; record < head2head.length; record++) {
        let set = 0, win = 0, backNum = record + 1, myWeight = weights[record];
        let winRate, count = 0;

        for (let match = 0; match < head2head[record].length; match++) {
            if(head2head[record][match] === "W") win++;
            if(head2head[record][match] === "W" || head2head[record][match] === "L") set++;
            if(head2head[record][match] === "W" && weights[match] > myWeight) count++;
        }
        
        winRate = win / set;
        if(set === 0) winRate = 0;
        
        result.push({ winRate, count, myWeight, backNum })
    }
    
    result.sort((a, b) => {
        if(a.winRate > b.winRate) return -1;
        else if (a.winRate === b.winRate) {
            
            if (a.count > b.count) return -1;
            else if (a.count === b.count) {
                
                if (a.myWeight > b.myWeight) return -1;
                else if (a.myWeight === b.myWeight) {
                    
                    if(a.backNum < b.backNum) return 1;
                }
            }
        }
    })

    return result.map(el => el = el.backNum);
}