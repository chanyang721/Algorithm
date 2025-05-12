function solution(dartResult) {
    // 다크 게임 => 3번 던져서 나온 점수의 합계를 구한다. 
    // 1번당 0 ~ 10점을 얻는다. 
    // 영역(보너스) => S = 점수^1, D = 점수^2, T = 점수^3 (각 점수마다 하나씩만 존재한다.)
    // 옵션 => * = 이전 점수 * 2 + 해당 점수 * 2, # = 해당 점수에 -를 붙인다. 
    // (*, #은 점수마다 둘 중 하나만 존재하며 없을 수도있다.)
    // * => 첫번째에 걸리면 해당 점수 * 2만 적용
    // * => *은 중첩 적용된다. 4배
    // * => #와 중첩 적용된다. -2배
    // 입력 => 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열dartResult이 입력
    //       "점수|보너스|[옵션]"
    // 숫자 | 대문자 | 특수문자
    let scoresInfo = [];
    let arr = dartResult.split("");
    let score = "";
    
    // 점수별 분리
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "S" || arr[i] === "D" || arr[i] === "T") {
            let bonus = arr[i]
            if (arr[i + 1] === "*" || arr[i + 1] === "#") {
                let option = arr[i + 1]
                scoresInfo.push([score, bonus, option])
                score = "";
                i++;
                continue;
            }
            scoresInfo.push([score, bonus]);
            score = "";
            continue;
        }
        score += arr[i]
    }
    
    
    // 보너스 적용
    scoresInfo = scoresInfo.map(el => {
        let power = 0;
        if (el[1] === "S") power = 1;
        if (el[1] === "D") power = 2;
        if (el[1] === "T") power = 3;
        return el = [ Math.pow(el[0], power), el[2] ];
    })
    
    // 옵션 적용
    let scores = []
    for (let i = 0; i < scoresInfo.length; i++) {
        let option = scoresInfo[i][1]
        if (option === undefined) scores.push(scoresInfo[i][0]);
        if (option === "*" && i === 0) scores.push(scoresInfo[i][0] * 2);
        if (option === "*" && i >= 1) {
            scores.push(scoresInfo[i][0] * 2);
            scores[i - 1] = scores[i - 1] * 2;
        }
        if (option === "#") scores.push(scoresInfo[i][0] * -1);
    }
    
    let result = scores.reduce((acc, cur) => acc + cur)
    
    return result;
}