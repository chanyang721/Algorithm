function solution(s, n) {
    // 시저 암호 => 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 만드는 암호
    // ex) "AB" => 시저암호 + 1 => "BC"
    // z + 1 => a
    // 문자열(대소문자) s를 n만큼 뒤로 이동한 암호를 리턴
    // 공백을 밀면 아무일도 일어나지 않는다.
    const sArr = s.split("");
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const smallAlpha = alpha.split("");
    const LargeAlpha = alpha.toUpperCase().split("");
const indexObj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26}
    
    let result = "";
    
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === " ") {
            result += " ";
            continue;
        }
        
        if(sArr[i] === sArr[i].toLowerCase()) { // 소문자인 경우
            let originIdx = indexObj[sArr[i]];
            let targetIdx = (originIdx - 1 + n) % 26
    
            let target = smallAlpha[targetIdx];
            result += target;
        }
        else if (sArr[i] === sArr[i].toUpperCase()) { // 대문자인 경우 
            let originIdx = indexObj[sArr[i].toLowerCase()];
            let targetIdx = (originIdx - 1 + n) % 26
            let target = LargeAlpha[targetIdx];
            result += target;
        }
    }
    
    return result;
}