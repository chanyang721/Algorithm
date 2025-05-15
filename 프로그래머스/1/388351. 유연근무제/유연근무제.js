function solution(schedules, timelogs, startday) {
    var answer = 0;
    const onMin = (time) => {
        const h = Math.floor(time / 100);
        const m = time % 100
        return h * 60 + m;
    }
    
    for (let i = 0; i < schedules.length; i++) {
        const hopeTime = onMin(schedules[i]);
        let success = 0;
        for (let j = 0; j < 7; j++) {
            const weekday = (startday + j) % 7;
            if (weekday === 6 || weekday === 0) continue;
            
            const logTime = onMin(timelogs[i][j]);
            if (hopeTime + 10 >= logTime) {
                success++
            }
        } 
        if (success === 5) answer++;
    }
    
    return answer;
}