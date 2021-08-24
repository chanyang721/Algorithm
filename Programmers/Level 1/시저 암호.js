function solution(s, n) {
    // 시저 암호 => 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 만드는 암호
    // ex) "AB" => 시저암호 + 1 => "BC"
    // z + 1 => a
    // 문자열(대소문자) s를 n만큼 뒤로 이동한 암호를 리턴
    // 공백을 밀면 아무일도 일어나지 않는다.
    // 26번 알파벳 => z
    // 1번 알파벳 => a
    // 26 + 1 => 1
    // 배열로 만든다. split("")
    // 요소가 빈칸인 경우 다음으로 넘어간다.
    // 요소가 대소문자를 구분해야한다.
    // 알파벳을 키로 숫자를 값으로 하는 객체 선언
    // 알파벳을 넣는다 => 해당 값을 가져온다. => 값 + 1의 인덱스를 가진 배열의 요소를 가져온다. 
    // 26보다 큰값인 경우 값에서 26을 뺸 수를 적용한다. 
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