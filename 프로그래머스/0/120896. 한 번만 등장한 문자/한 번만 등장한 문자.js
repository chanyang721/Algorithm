function solution(s) {
    // 1time.sort(a-b) : ""
    // new map => str: 0
    // arr = s.split("")
    // for arr i 0 -> len
    //      if (!map[arr[i] || 0) map.set(arr[i], 1)
    //      else (map[arr[i]]) map[arr[i]]++
    // for [str, times] of arr 
    //      if times === 1 ? answer += str
//     const map = new Map();
//     const arrS = s.split("")
    
//     for (let i = 0; i < arrS.length; i++) {
//         if (!map.has(arrS[i])) {
//             map.set(arrS[i], 1)
//         } else {
//             map.set(arrS[i], map.get(arrS[i]) + 1)
//         }
//     }
    
//     const oneTimeChars = [];
//     for (const [str, times] of map) {
//         if (times === 1) {
//             oneTimeChars.push(str)
//         }
//     }
    
//     oneTimeChars.sort()
//     return oneTimeChars.join('');
    const cnt = {}
    for (const char of s) {
        cnt[char] = (cnt[char] || 0) + 1
    }
    
    return Object.keys(cnt)
        .filter(char => cnt[char] === 1)
        .sort()
        .join("")
}