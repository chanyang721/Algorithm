function solution(rank, attendance) {
    // rank, attendance-> 참여 가능
    // return 10000 × a + 100 × b + c
    // let a, b, c = 0
    // const rankers = [];
    // let len = rank.length
    // let count = 3
    // for rank i = 1 -> len+1
    //      ranker = rank.indexOf(i)
    //      if !attendance[ranker] continue
    //      else if attendance[ranker] 
    //          rankers.push(ranker) count--
    //      if count === 0 ? break
    let len = rank.length, count = 3;
    const rankers = [];
    for (let i = 1; i <= rank.length; i++) {
        let ranker = rank.indexOf(i)
        if (!attendance[ranker]) continue;
        else if (attendance[ranker]) {
            rankers.push(ranker)
            count--
        }
        if (count === 0) break;
    }
    const [a,b,c] = rankers
    const answer = 10000 * a + 100 * b + c
    return answer;
}