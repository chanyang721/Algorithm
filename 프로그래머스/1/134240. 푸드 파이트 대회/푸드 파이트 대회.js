function solution(food) {
    // 1:1, 왼 -> 오, 오 -> 왼, 중앙 물 먼저 먹으면 승리
    // food -> 칼로리 적은 순서의 음식
    // i => 음식, food[i] => 음식의 수
    // i = 0 ? food[0] => 물
    // for i = 1 -> len i++
    //      count = food[i]
    //      while(count > 2) answer += food[i]
    let left = [], right = [];
    for (let i = 1; i < food.length; i++) {
        const count = Math.floor(food[i] / 2);
        for (let j = 0; j < count; j++) {
            left.push(i);
        }
    }
    right = [...left].reverse();
    return left.join("") + 0 + right.join("");
}