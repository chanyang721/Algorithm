function solution(record) {
    const base = record.map(el => el = el.split(" "));
    const users = {};
    
    for (let i = 0; i < base.length; i++) {
        if (base[i][2]) users[base[i][1]] = base[i][2];
    }

    let result = [];
    for (let i = 0; i < base.length; i++) {
        if (base[i][0] === "Change") continue;
        
        let text = base[i][0] === "Enter" ? "님이 들어왔습니다." : "님이 나갔습니다.";
        let el = `${users[base[i][1]]}${text}`;
        result.push(el);
    }

    return result;
}