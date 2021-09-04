function solution(n, words) {
    // 1 ~ n명의 끝말 잇기
    // 순서대로 단어를 말한다. 
    // 마지막 사람이 말하면 1번으로 돌아온다. 
    // 앞사람 단어의 마지막 문자로 시작하는 단어를 말한다. // 이전단어의 마지막 문자 저장
    // 재사용 불가 // includes
    // 한글자 단어는 인정 안됨 // 길이 제한
    // 가장 먼저 탈락하는 사람의 번호, 몇번쨰 차례에서 탈락하는지를 리턴
    // 탈락하는 사람이 없는 경우 [ 0, 0 ] 리턴 
    let turn = 2, count = 1;
    let lastLetter = words[0][words[0].length - 1];
    let base = [ words[0] ]
    let result;

    for (let i = 1; i < words.length; i++) {
        if (i === words.length - 1) result = [0, 0];
        if (turn > n) {
            count++;
            turn = 1;
        }
        if (lastLetter !== words[i][0] || base.includes(words[i])) {
            result = [ turn, count ];
            break;
        }
        base.push(words[i]);
        lastLetter = words[i][words[i].length - 1];
        turn++;

    }
        
    
    return result;
}