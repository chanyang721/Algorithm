function solution(scores) {
    // i행의 j열의 점수는 i번째 학생이 j번째 학생의 과제를 평가한 점수이다.
    // 모든 점수를 더한 값의 평균으로 학점을 부여한다. 
    // 만약 자기 자신을 평가한 점수가 유일한 최고정 혹은 최저점이라면 해당 점수를 제외한 평균값으로 학점을 부여한다. 
    // 입력 => 2차원 배열 scores [[50,90],[50,87]]
    // 출력 => 0번 학생부터 학점을 이어붙인 문자열
    // 학점 계산기 보조 함수 생성
    // 배열의 최대값, 최소값을 계산하고, 중복된 값이 존재하는지 확인한다. 
    // 자기 자신이 평가한 값이 최대값, 최소값이고, 중복된 값이 없다면 0으로 만든다. 
    // 그게 아니라면 그대로 둔다. 
    // 결과를 담을 result 문자열 선언
    // 보조함수 function makeScoreToGrade (score) => { }
    // for i => 0부터, scores.length까지 1씩 증가,
    //   let max 최대값 저장 변수 선언
    //   let min 최소값 저장 변수 선언
    //   만약 scores[i][i]의 값이 최대값 혹은 최소값이고, 중복된 값이 없다면 0으로 변경한다.
    let result = '';
    const makeScoreToGrade = function (score) {
        let GradeScore = Math.floor(score / 10)
        if (GradeScore === 0 || GradeScore === 9) result += "A";
        else if (GradeScore === 8) result += "B";
        else if (GradeScore === 7) result += "C";
        else if (GradeScore === 5 || GradeScore === 6) result += "D";
        else result += "F";
        return result;
    }
    let L = scores.length;
    let baseArr = [];
    for (let i = 0; i < L; i++) {
        let elArr = new Array(L).fill(0);
        baseArr.push(elArr);
    };
    
    for (let row = 0; row < scores.length; row++) {
        for (let col = 0; col < scores.length; col++) {
            baseArr[row][col] = scores[col][row];
        }
    }
    
    for (let i = 0; i < baseArr.length; i++) {
        let max = Math.max(...baseArr[i]);
        let min = Math.min(...baseArr[i]);
        if (baseArr[i][i] === max) {
            baseArr[i][i] = 0;
            if (baseArr[i].includes(max)) baseArr[i][i] = max;
        }
        else if (baseArr[i][i] === min) {
            baseArr[i][i] = 0;
            if (baseArr[i].includes(min)) baseArr[i][i] = min;
        }
        let avgeScore = baseArr[i].reduce((acc, cur) => acc + cur) / 5;
        makeScoreToGrade(avgeScore)
    }
    
    return result;
}