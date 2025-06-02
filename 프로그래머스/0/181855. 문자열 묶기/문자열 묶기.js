function solution(strArr) {
    // bigger group(el.len).length ?
    // map = new Map()
    // strArr.map(el => map[el.length] ? map[el.length]++ : map.set(el.length, 0))
    // Math.max(map.values())
    let map = new Map()
    for (str of strArr) {
        const len = str.length
        map.set(len, (map.get(len) || 0) + 1)
    }
    
    var answer = Math.max(...map.values());
    return answer;
}