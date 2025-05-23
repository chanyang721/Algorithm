function solution(my_string) {
    const lower = 'abcdefghijklmnopqrstuvwxyz'
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const chars = [...upper, ...lower];
    const charObj = Object.fromEntries([...chars].map(ch => [ch, 0]))
    for (let i = 0; i < my_string.length; i++) {
        charObj[my_string[i]]++
    }
                            
    
    var answer = Object.values(charObj);
    return answer;
}