function solution(spell, dic) {
    // alpha = spell
    // 외계어 = dic
    // spell = spell.sort().join()
    // dic.map(el => el.split.sort.join === spell ? answer = 1 : el)
    var answer = 2;
    
    spell = spell.sort().join("")
    for (let str of dic) { 
        if (str.split("").sort().join("") === spell) {
            answer = 1;
            break
        }
    }
    
    return answer;
}