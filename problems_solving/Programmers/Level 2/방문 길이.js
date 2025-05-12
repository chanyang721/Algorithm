function solution(dirs) {
    // 이미 지난 길을 기록한다.
    // dirs의 길이가 0이 될때까지 반복한다. 
    // 지점 방문이 아닌 출발, 도착 지점을 저장해서 있는지 판단한다.
    // 이동한 경로를 저장할 객체 선언
    // 이동하는 좌표 선언
    // 만약 이동한 좌표가 좌표평면을 넘은 지점인 경우 아무것도 하지 않는다.
    const save = [];
    const move = { "U": [1, 0], "D": [-1, 0], "R": [0, 1], "L": [0, -1] }
    let count = 0;
    dirs = dirs.split("")

    let now = [0, 0];
    while (dirs.length > 0) {
        let order = dirs.shift();
        let nextStep = move[order];
        let next = [ now[0] + nextStep[0], now[1] + nextStep[1] ];
        
        if (next[0] > 5 || next[0] < -5 || next[1] > 5 || next[1] < -5) continue;
        else {
            count++; 
            
            for (let i = 0; i < save.length; i++) {
                if (save[i].now === now.join("") && save[i].next === next.join("")) {
                    count--;
                    break;
                }
                else if (save[i].now === next.join("") && save[i].next === now.join("")) {
                    count--;
                    break;
                }
            }
            save.push({ now: now.join(""), next: next.join("") });
            now = next;    
        }
    }
    
    return count;
}