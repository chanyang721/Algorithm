function solution(m, musicinfos) {
    
    let database = { "C#": "c", "D#": "d", "E#": "e", "F#": "f", "G#": "g", "A#": "a", "B#": "b"};
    let result = [];
    let M = "";
    for (let i = 0; i < m.length; i++) {
        if (m[i + 1] === "#") {
                M += database[m[i] + "#"]
                i++;
        }
        else M += m[i];
    }
    
    for (let i = 0; i < musicinfos.length; i++) {
        let base = musicinfos[i].split(",");
        let playHour = Number(base[1].slice(0, 2)) - Number(base[0].slice(0, 2));
        let playMin = Number(base[1].slice(3)) - Number(base[0].slice(3)) + playHour * 60;
        let musicLength = base[3].split("#").join("").length;

        let el = "";
        for (let j = 0; j < base[3].length; j++) {
            if (base[3][j + 1] === "#") {
                el += database[base[3][j] + "#"]
                j++;
            }
            else el += base[3][j];
        }

        if (playMin < musicLength) base[3] = el.slice(0, playMin);
        else base[3] = el.repeat(playMin / musicLength) + el.slice(0, playMin % musicLength);

        
        let boolean = false;
        if (base[3].includes(M)) boolean = true;

        
        if (boolean) result.push({ idx: i, title: base[2], playTime: playMin });
    }

    result.sort((a, b) => {
        if (b.playTime < a.playTime) return -1;
        else if (b.playTime === a.playTime) {
            if (b.idx > a.idx) return 1;
        }
    })
    
    return result[0] === undefined ? "(None)" : result[0].title;
}