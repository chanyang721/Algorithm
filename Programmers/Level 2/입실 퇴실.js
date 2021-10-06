function solution(enter, leave) {
    // 퇴실자가 나올때까지 입실한다.
    // 만약 퇴실자[0]번이 입실한다면, 
    // 입실자
    // 방에서 퇴실자 0번이 없을때까지 제거한다.
    // 다시 넣는다.
    let base = {}; // 모든 입퇴실자의 대면 기록
    for (let i = 0; i < enter.length; i++) { base[enter[i]] = 0; };
    console.log(base)
    
    let room = {}; // "번호": 만난 사람 수 // 입실자를 저장할 변수
    for (let i = 0; i < enter.length; i++) {
        // i번째 입실자를 넣기 전에 이전의 입실자들이 만난 사람의 수를 1씩 증가시킨다.
        for (let key in room ) { room[key]++ };
        // i번째 입실자를 방에 넣는다.
        room[enter[i]] = Object.keys(room).length;
        // 만약 leave[0]이 room에 없을때까지 반복문을 돌린다. 
        while (room[leave[0]] !== undefined) {
            base[leave[0]] = room[leave[0]]; // 베이스에 만난 사람 저장 
            delete room[leave[0]];
            leave.shift();
        }
    }
    
    return Object.values(base);
}