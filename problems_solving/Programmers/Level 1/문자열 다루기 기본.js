function solution(s) {
    // s.length === 4 or 6이며, 숫자로만 구성되어있는지 확인하는 블리언리턴
    // let result;
    // if => 길이가 4 or 6이고,
    //    if => !isNaN(Number(s))이면 true
    let result = false;
    
    let L = s.split("e").join("").length
    
    if (L === 4 || L === 6) {
        if (!isNaN(Number(s))) {
            result = true;
        }
    }
    return result;
}