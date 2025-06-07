function solution(k, score) {
    // 가수 -> 시청자 -> 투표 -> 점수
    // 점수 > k번쨰 가수 점수 명예의 전당
    // k일 이전: 모든 가수 오름
    // k일 이후: 랭킹
    // 명예의 전당의 최하위 점수 배열
    // ranking = [];
    // for i = 0 -> score.len
    //      if ranking.length <= k ? ranking.push(score[i])
    //      else if ranking.length > k ? 
    //          ranking.sort().pop()
    var ranking = [];
    let answer = [];
    for (let i = 0; i < score.length; i++) {
        ranking.push(score[i])
        ranking.sort((a, b) => b - a)
        
        if (ranking.length > k) {
            ranking.pop();
        }
        
        answer.push(ranking.at(-1))
    }
    return answer;
}