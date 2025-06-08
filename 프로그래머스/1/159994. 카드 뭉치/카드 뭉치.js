function solution(cards1, cards2, goal) {
    // 순서 고정 카드뭉치에서 1개를 꺼내 반드시 사용하고 넘어감
    // goal을 만들어야함
    // 만들 수 있으면 "Yes", 못만들면 "No"
    // let idx1 = 0, idx2 = 0;
    // for goal i = 0 -> len
    //      let target = goal[i]
    //      if (card1[idx1] === target) 
    //          idx1++
    //      else if (card2[idx2] === target) 
    //          idx2++
    //      else break
    var answer = "Yes";
    let idx1 = 0, idx2 = 0;
    for (let i = 0; i < goal.length; i++) {
        let target = goal[i]
        
        if (cards1[idx1] === target) {
            idx1++
        } else if (cards2[idx2] === target) {
            idx2++
        } else {
            answer = "No";
        }
    }
    return answer;
}